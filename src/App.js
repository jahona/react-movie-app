import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()

  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> compoentDidUpdate()

  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
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
      })
    }, 5000)
  }

  // _를 붙인 이유는 기본 함수와 구별을 위함
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
