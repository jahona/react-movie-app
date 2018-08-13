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

  state = {
    greeting: 'Hello'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
