import * as React from "react";
import { render } from "react-dom";
import { AppState } from "./store/AppState";
import { App } from "./components/App";
import { applySnapshot, getSnapshot } from "mobx-state-tree";

const rootElem = document.getElementById("root");
let appState = AppState.create({
  counter: 0
});
if (window.appState) {
  applySnapshot(appState, getSnapshot(window.appState));
}
window.appState = appState;

render(<App state={appState} />, rootElem);
