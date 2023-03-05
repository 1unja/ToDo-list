const form = document.querySelector("#form");
const input = document.querySelector("#input-text");
const list = document.querySelector("#list");

let space = false;

form.addEventListener("submit", taskListen);

list.classList.add("window-none");

function taskListen(event) {
  event.preventDefault();

  const text = input.value;

  const newContainer = document.createElement("div");
  const newTask = document.createElement("span");
  newTask.innerText = text;
  list.append(newContainer);
  newContainer.classList.add("task-line");
  newContainer.append(newTask);

  const doneBtn = document.createElement("button");
  doneBtn.setAttribute("role", "button");
  doneBtn.innerText = "done";
  doneBtn.classList.add("done-btn");
  newContainer.append(doneBtn);
  doneBtn.addEventListener("click", doneFun);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "delete";
  deleteBtn.classList.add("delete-btn");
  newContainer.append(deleteBtn);
  deleteBtn.addEventListener("click", deleteFun);

  function doneFun() {
    this.closest("div").querySelector("span").classList.add("done");
  }

  space = true;

  function deleteFun() {
    this.closest("div").remove();
    if (list.querySelector("div")) {
      space = true;
    } else {
      space = false;
    }
    if (space === false) {
      list.classList.add("window-none");
      list.querySelector("h1").classList.remove("close");
      list.querySelector("h1").classList.add("open");
    } else {
      list.classList.remove("window-none");
      list.querySelector("h1").classList.remove("open");
      list.querySelector("h1").classList.add("close");
    }
  }

  if (space === false) {
    list.classList.add("window-none");
    list.querySelector("h1").classList.remove("close");
    list.querySelector("h1").classList.add("open");
  } else {
    list.classList.remove("window-none");
    list.querySelector("h1").classList.remove("open");
    list.querySelector("h1").classList.add("close");
  }

  input.value = "";
  input.focus();
}
