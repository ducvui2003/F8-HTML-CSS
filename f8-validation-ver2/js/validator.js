function Validator(formSelector) {
  //obj to handle Form
  //Each property is array contain functions
  var formRules = {};

  var validatorRules = {
    // Quy ước tạo rule:
    // - Nếu rule có lỗi => trả về error message
    // - Nếu rule ko lỗi => trả về undefined
    // Defined function to handle validator
    required: function (value) {
      return value ? undefined : "Please enter this field";
    },
    email: function (value) {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(value) ? undefined : "Email is not valid";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Please enter a minimum of ${min} characters`;
      };
    },
    max: function (max) {
      return function (value) {
        return value.length <= max
          ? undefined
          : `Please enter a maximum of ${max} characters`;
      };
    },
  };

  var formElement = document.querySelector(formSelector);

  // Only handle when formElement exist
  if (formElement) {
    var inputs = formElement.querySelectorAll("[name][rules]");

    //add rule into obj formRules
    for (const input of inputs) {
      const rules = input.getAttribute("rules").split("|"); //get rule

      rules.forEach(function (rule) {
        const isRuleHasValue = rule.includes(":");

        let ruleInfo;
        if (isRuleHasValue) {
          ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }

        var ruleFunc = validatorRules[rule];

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]); //ruleInfo[1] is value
        }

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
        console.log(formRules);
      });

      // Event handle (blur, change,...)
      input.onblur = handleValidate;
      input.oninput = handleClearError;
    }

    function handleValidate(e) {
      const rules = formRules[e.target.name]; // each property is func
      var errorMessage;

      for (const rule of rules) {
        errorMessage = rule(e.target.value);
        if (errorMessage) break;
      }

      if (errorMessage) {
        const formGroup = getParent(e.target, ".form-group");

        if (!formGroup) return;

        formGroup.classList.add("invalid");
        var formMessage = formGroup.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerText = errorMessage;
        }
      }
      return !errorMessage;
    }
  }

  function handleClearError(e) {
    const formGroup = getParent(e.target, ".form-group");
    if (formGroup.classList.contains("invalid")) {
      formGroup.classList.remove("invalid");

      var formMessage = formGroup.querySelector(".form-message");
      if (formMessage) {
        formMessage.innerText = "";
      }
    }
  }

  formElement.onsubmit = function (e) {
    e.preventDefault();

    var inputs = formElement.querySelectorAll("[name][rules]");
    let isValid = true;

    //check valid before submit
    for (const input of inputs) {
      if (handleValidate({ target: input })) {
        isValid = false;
      }
    }

    if (isValid) {
      if (typeof options.onSubmit === "function") {
        options.onSubmit;
      } else {
        this.onSubmit();
      }
    }
  };
}

function getParent(childElement, parentSelector) {
  while (!childElement.matches(parentSelector)) {
    childElement = childElement.parentElement;
  }
  return childElement;
}
