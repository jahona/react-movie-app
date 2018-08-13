import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Movie1", "Movie2", "Movie3"];

const movieImages = ["http://ww2.sjkoreancatholic.org/files/testing_image.jpg"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
      </div>
    );
  }
}

export default App;
