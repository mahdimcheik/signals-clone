// import ComputedState from "./ComputedState.js";
import State from "./State.js";

export default function Child() {
  const myState = new State("Random value");
  // const computedState = new ComputedState("computed state");

  const element = document.createElement("div");
  element.appendChild(myState.element);
  function handleClick() {
    console.log("clicked");
    myState.setValue("New Value from Child");
    console.log("my statem", myState.element);
  }
  element.innerHTML = "<h1>This is a child using state</h1>";
  element.append(myState.element);

  const btn = document.createElement("button");
  btn.innerHTML = "New Value from Child";
  btn.onclick = handleClick;
  element.appendChild(btn);

  //element.append(computedState.element);

  return element;
}
