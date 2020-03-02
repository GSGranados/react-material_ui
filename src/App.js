import React, { Component } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Exercises from './components/Exercises/Index';
class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Exercises></Exercises>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
