import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Movie1",
    poster: "http://ww2.sjkoreancatholic.org/files/testing_image.jpg"
  },
  {
    title: "Movie2",
    poster: "http://ww2.sjkoreancatholic.org/files/testing_image.jpg"
  },
  {
    title: "Movie3",
    poster: "http://ww2.sjkoreancatholic.org/files/testing_image.jpg"
  }
]

class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()

  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> compoentDidUpdate()

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    console.log('render')

    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
