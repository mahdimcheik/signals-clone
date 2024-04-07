import Child from "./Child.js";
import { ParentComponentClass } from "./ParentComponentClass.js";
import { importText } from "./Context.js";

const root = document.querySelector(".root");
root.append(await Child());
const newElement = new ParentComponentClass();
root.appendChild(newElement);
const text = await importText("./custom.html");
console.log(text);
