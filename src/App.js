import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // render : componentWillMount() -> render() -> componentDidMount()

  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> compoentDidUpdate()

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  // _를 붙인 이유는 기본 함수와 구별을 위함
  _renderMovies = () => {
    // key={index}.. 키로 컴포넌트의 id를 주면 느리다. 따라서 movie.id를 사용
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })

    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    // 모던 자바스크립트에서는 arrow function 내에 return을 포함하고 있다.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(movie => movie.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
