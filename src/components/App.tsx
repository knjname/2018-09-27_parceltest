import * as React from "react";
import { observer } from "mobx-react";
import { AppState } from "../store/AppState";
import { AppStyle } from "./App.css";

@observer
export class App extends React.Component<{ state: typeof AppState.Type }> {
  render() {
    const { counter, increment } = this.props.state;

    return (
      <div className={AppStyle}>
        <h1>Counter: {counter}</h1>

        <button onClick={increment}>Increase</button>
      </div>
    );
  }
}
