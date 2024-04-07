export default class Signal {
  constructor(value) {
    this.value = value;
    this.element = document.createElement("my-signal");
    this.element.innerHTML = value;
    this.subscribers = new Set();
  }
  render() {
    this.element.innerHTML = this.value;
    // console.log("state new value : ", this.element);
  }
  subscribe(callback) {
    this.subscribers.add(callback);
  }
  setValue(newValue) {
    this.value = newValue;
    this.render();
    if (this.subscribers.size) {
      this.subscribers.forEach((subscriber) => subscriber.render());
    }
  }
}
