// import State from "./State.js";

// export default class ComputedState extends State {
//   constructor(value, dependencies = []) {
//     super(value);
//     this.dependencies = dependencies;
//   }
//   render() {
//     super.render();
//   }
//   setValue(newValue) {
//     this.value = newValue;
//     if (this.dependencies.length) {
//       this.dependencies.forEach((dependency) =>
//         dependency.subscribe(this.render)
//       );
//     }
//     this.render();
//   }
// }
