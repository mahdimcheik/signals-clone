export default class ComputedState {
  constructor(value, dependencies = []) {
    this.value = value;
    this.dependencies = dependencies;
    this.element = document.createElement("my-signal");
    this.updateValue();
    this.render();
    if (this.dependencies.length) {
      this.dependencies.forEach((dependency) =>
        dependency.subscribe(this.updateValue.bind(this))
      );
    }
  }

  render() {
    this.element.innerHTML = this.value();
  }

  updateValue() {
    this.render();
  }
}

// export default class ComputedState {
//   constructor(compute, dependencies = []) {
//     this.value = compute;
//     this.element = document.createElement("div");
//     this.element.innerHTML = this.value();
//     this.dependencies = dependencies;
//     this.setValue(compute);
//     if (this.dependencies.length) {
//       this.dependencies.forEach((dependency) =>
//         dependency.subscribe(this.setValue)
//       );
//     }
//   }
//   render() {
//     console.log("value from render", this.value());
//     this.element.innerHTML = this.value();
//   }
//   setValue = (newValue) => {
//     this.value = newValue;
//     this.render();
//   };
// }
