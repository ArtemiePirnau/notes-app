document.addEventListener("DOMContentLoaded", () => {
  const buttonAdd = document.querySelector(".header__add");
  const form = document.querySelector(".modal");
  const closeForm = document.querySelector(".modal__hide");
  const listOfNotes = document.querySelector(".menu__list");
  const trashIcons = document.querySelectorAll(".menu__item-trash");
  const textInput = document.querySelector(".modal__input");
  const nameInput = document.querySelector(".modal__name");

  listOfNotes.addEventListener("click", (e) => {
    let item = e.target;
    if (item.classList.contains("menu__item-img")) {
      item.parentElement.parentElement.classList.add("delete");
    }
  });

  buttonAdd.addEventListener("click", () => {
    form.classList.add("show");
  });

  closeForm.addEventListener("click", () => {
    form.classList.remove("show");
  });

  const renderItem = (text, name, clazz) => {
    let liItem = document.createElement("li");
    let date = new Date();
    liItem.classList.add(clazz);
    liItem.innerHTML = `
      <button class="menu__item-trash">
      <img class="menu__item-img" src="./images/delete.svg" alt="delete icon">
      </button>
    <div class="menu__item-top">
              <h6 class="menu__item-name">${name}</h6>
              <p class="menu__item-date">
              ${changeNumber(date.getHours())} : ${changeNumber(
      date.getMinutes()
    )} : ${changeNumber(date.getSeconds())} 
              </p>
            </div>
            <p class="menu__item-text">
              ${text}
            </p>
    `;
    listOfNotes.appendChild(liItem);
  };

  const changeNumber = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const cleanFields = () => {
    textInput.value = "";
    nameInput.value = "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let textValue = textInput.value;
    let nameValue = nameInput.value;

    if (textValue == "" || nameValue == "") {
      return;
    } else {
      renderItem(textValue, nameValue, "menu__item");
      cleanFields();
    }
  };
  form.addEventListener("submit", onSubmit);
});
