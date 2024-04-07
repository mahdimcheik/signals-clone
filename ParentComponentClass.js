import Signal from "./Signal.js";

export class ParentComponentClass extends HTMLElement {
  constructor() {
    super();
    this.signal = new Signal(10);
    const hd = document.createElement("h1");
    hd.appendChild(this.signal.element);
    this.appendChild(hd);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.addEventListener("click", () => {
      console.log(this.signal.value);
      this.signal.setValue(this.signal.value * 2);
    });
    btn.innerHTML = "double it";
    this.appendChild(btn);
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }
}

customElements.define("parent-custom-class", ParentComponentClass);
