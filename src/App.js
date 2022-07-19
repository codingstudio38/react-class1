import React from "react";
import logo from './logo.svg';
import './App.css';
import Newcomponent from './class-component/Newcomponent'
import Jsxcomponent from './jsx/Jsxcomponent'
import { CommonContext } from './Common/CommonContext';
import CommonChild from "./Common/CommonChild";
import UpdateButton from "./Common/UpdateButton";
class App extends React.Component {
  constructor() {
    super()
    this.updateColor = (col) => {
      alert(col)
      this.setState = ({
        color: col
      })
    }
    this.state = {
      color: "green",
      updateColor: this.updateColor
    }
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Newcomponent />
            <Jsxcomponent />
            <CommonChild />
            <UpdateButton />
          </header>

        </div>
      </CommonContext.Provider>
    );
  }
}

export default App;
