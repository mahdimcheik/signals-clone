import Compute from "./Compute.js";
import Signal from "./Signal.js";
import { contextSignal } from "./Context.js";

export default function Child() {
  const myState = new Signal(1);
  const computedState = new Compute(() => myState.value + 2, [myState]);
  const computedState2 = new Compute(() => myState.value * 2, [myState]);

  const element = document.createElement("div");
  element.appendChild(myState.element);
  function handleClick() {
    myState.setValue(myState.value + 1);

    console.log("new state : ", myState.value);
  }
  element.innerHTML = "<h1>This is a child using state</h1>";
  element.append(myState.element);

  const btn = document.createElement("button");
  btn.innerHTML = "New Value from Child";
  btn.onclick = handleClick;
  element.appendChild(btn);

  element.append(computedState.element);
  element.append(computedState2.element);

  element.appendChild(btn);

  const h1Context = document.createElement("h1");
  h1Context.appendChild(contextSignal.element);

  const btnContext = document.createElement("button");
  btnContext.innerHTML = "Change Context Signal Value";
  btnContext.addEventListener("click", () => {
    contextSignal.setValue(contextSignal.value * 10);
  });
  element.append(btnContext, h1Context);

  return element;
}
