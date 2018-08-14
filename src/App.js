import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()

  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> compoentDidUpdate()

  state = {}

  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(movie => movie.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
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
