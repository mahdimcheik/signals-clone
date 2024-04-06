import State from "./State.js";

export default function Child() {
  const myState = new State("Random value");
  const element = document.createElement("span");
  function handleClick() {
    console.log("clicked");
    myState.setValue("New Value from Child");
  }
  element.innerHTML = "<h1>This is a child using state</h1>";
  console.log(myState.element);
  element.append(myState.element);
  const btn = document.createElement("button");
  btn.innerHTML = "New Value from Child";
  btn.onclick = handleClick;
  element.appendChild(btn);

  return element;
}
