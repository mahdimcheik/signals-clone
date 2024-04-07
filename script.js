import Child from "./Child.js";
import { ParentComponentClass } from "./ParentComponentClass.js";

const root = document.querySelector(".root");
root.append(Child());
const newElement = new ParentComponentClass();
root.appendChild(newElement);
