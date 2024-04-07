import ComputedState from "./ComputedState.js";
import State from "./State.js";

export default function Child() {
  console.log("rendered ");
  const myState = new State(1);
  const computedState = new ComputedState(() => myState.value + 2, [myState]);

  const element = document.createElement("div");
  element.appendChild(myState.element);
  function handleClick() {
    myState.setValue(myState.value + 1);
  }
  element.innerHTML = "<h1>This is a child using state</h1>";
  element.append(myState.element);

  const btn = document.createElement("button");
  btn.innerHTML = "New Value from Child";
  btn.onclick = handleClick;
  element.appendChild(btn);

  element.append(computedState.element);

  return element;
}
