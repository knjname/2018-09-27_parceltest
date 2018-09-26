import { types, onSnapshot } from "mobx-state-tree";

export const AppState = types
  .model("AppState", {
    counter: types.number
  })
  .actions(self => ({
    increment() {
      self.counter += 1;
    }
  }));
