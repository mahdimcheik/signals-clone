import Signal from "./Signal.js";

const contextSignal = new Signal(100);
async function importText(path) {
  try {
    const res = await fetch("./custom.html");
    const text = await res.text();
    return text;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { contextSignal, importText };
