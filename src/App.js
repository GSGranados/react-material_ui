import React, { Component } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Exercises from './components/Exercises/Index';
import {muscles, exercises} from './store';
class App extends Component {

  state={
    exercises
  }

  getExercisesByMuscles(){

    return Object.entries( this.state.exercises.reduce((exercises,exercise)=>{
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise]

      return exercises
    }, {}))
  }

  render() {
    console.log(this.getExercisesByMuscles());
    return (
      <>
        <Header></Header>
        <Exercises></Exercises>
        <Footer muscles={muscles}></Footer>
      </>
    );
  }
}

export default App;
