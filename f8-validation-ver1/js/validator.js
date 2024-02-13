// constructor
function Validator(options) {
  var formElement = document.querySelector(options.form);
  var selectorRules = {};

  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);

    var errorMessage;

    // Get all rule of this selector
    var rules = selectorRules[rule.selector];

    // Loop rule + check
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case "radio":
        case " checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;

        default:
          errorMessage = rules[i](inputElement.value);
          break;
      }
      if (errorMessage) {
        break;
      }
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage; //=> Get form_message and get text
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }

    return !errorMessage; //=> Return boolean
  }

  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;
      // Loop each rule and validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);

        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          // Submit with JS
          var inputElementEnable = formElement.querySelectorAll(
            "[name]:not([disable])"
          );
          var formValues = Array.from(inputElementEnable).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector(
                  `input[name="${input.name}"]:checked`
                ).value;

                break;
              case "checkbox":
                if (!input.matches(":checked")) {
                  values[input.name] = "";
                  return values;
                }

                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }

                values[input.name].push(input.value);
                break;

              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
                break;
            }
            return values;
          },
          {});
          options.onSubmit(formValues);
        } else {
          // Submit with default logic button
          formElement.submit();
        }
      }
    };

    // Call back
    // Loop each rule and handle logic
    options.rules.forEach(function (rule) {
      // Save rule
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // Xử lý trường hợp khi người dùng đang nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };

        // Onchange for select options
        // if (inputElement.tagName === "SELECT") {
        //   inputElement.onchange = function () {
        //     var optionSelected =
        //       inputElement.options[inputElement.selectedIndex];
        //     var errorElement = getParent(
        //       inputElement,
        //       options.formGroupSelector
        //     ).querySelector(options.errorSelector);
        //     if (optionSelected.value == "") {
        //       errorElement.innerText = "Please select this field";
        //       getParent(inputElement, options.formGroupSelector).classList.add(
        //         "invalid"
        //       );
        //     } else {
        //       errorElement.innerText = "";
        //       getParent(
        //         inputElement,
        //         options.formGroupSelector
        //       ).classList.remove("invalid");
        //     }
        //   };
        // }
      });
    });
  }
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
}

// Function
Validator.isRequired = function (selector, message) {
  // Return 1 obj
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Please enter this field";
    },
  };
};

Validator.isEmail = function (selector, message) {
  // Return 1 obj
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Please enter email for this field";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Please enter at least ${min} characters`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Password not match";
    },
  };
};
