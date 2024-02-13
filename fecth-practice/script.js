// Flow: keyboardAPI -> getKBs -> arrayKeyboard -> Render
var keyboardAPI = "http://localhost:3000/keyboard";
/*
 - Get data
 - Render data (1 time)
 - CRUD
 */
function start() {
  getKeyboards(renderKeyboard);
  getKeyboards(handleDelete);
  handleCreateForm();
}
start();

// Function
function getKeyboards(callback) {
  fetch(keyboardAPI)
    .then(function (response) {
      return response.json(); //array keyboard
    })
    .then(callback); // parameter of callback => array keyboard
}

function renderKeyboard(arrayKeyboard) {
  var listKB = document.querySelector("#keyboard__list");
  var htmls = arrayKeyboard.map(function (keyboard) {
    return `<div class="list__item">
                          <div class="list__item-inner list__item-id">
                            ${keyboard.id} 
                          </div>
                          <div class="list__item-inner list__item-brand">
                            ${keyboard.brand} 
                          </div>
                            <div class="list__item-inner list__item-name">
                            ${keyboard.name} 
                          </div>
                            <div class="list__item-inner list__item-price">
                            ${keyboard.price} 
                          </div>
                          <div class=" list__delete-btn">Delete</div> 
            </div>`;
  });
  listKB.innerHTML += htmls.join("");
}

function createKeyboard(dataForm, callback) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  };
  fetch(keyboardAPI, options)
    .then(function (response) {
      return response.json(); //array keyboard be added
    })
    .then(callback); // parameter => array keyboard
}

function deleteKeyboard(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${keyboardAPI}/${id}`, options).then(function (response) {
    return response.json();
  });
  // .then(callback);
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    const brand = document.querySelector('input[name="brand"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const dataForm = { name, brand, price };
    if (dataForm.name != "" && dataForm.brand != "" && dataForm.price != "") {
      createKeyboard(dataForm, function (keyboard) {
        var child = `
                <div class="list__item">
                  <div class="list__item-inner list__item-id">
                    ${keyboard.id} 
                  </div>
                    <div class="list__item-inner list__item-brand">
                    ${keyboard.brand} 
                  </div>
                    <div class="list__item-inner list__item-name">
                    ${keyboard.name} 
                  </div>
                    <div class="list__item-inner list__item-price">
                    ${keyboard.price} 
                  </div>
                  <div class="list__delete-btn">Delete</div> 
                </div>`;
        listKB.appendChild(child);
      });
    }
  };
}

function handleDelete() {
  var deleteBtns = document.querySelectorAll(".list__delete-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.onclick = (e) => {
      const parentElement = deleteBtn.parentElement;
      const id = parentElement.querySelector(".list__item-id").innerText;
      deleteKeyboard(id);
      parentElement.remove();
    };
  });
}
