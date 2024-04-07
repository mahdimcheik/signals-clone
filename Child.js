import ComputedState from "./ComputedState.js";
import State from "./State.js";

export default function Child() {
  console.log("rendered ");
  const myState = new State(1);
  const computedState = new ComputedState(() => myState.value + 2, [myState]);
  const computedState2 = new ComputedState(() => myState.value * 2, [myState]);

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

  const content = `
<div>
Original state : ${myState.element.innerHTML}
</div>
`;

  const html = new DOMParser().parseFromString(content, "text/html").body;
  element.appendChild(html);
  return element;
}
