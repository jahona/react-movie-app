import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
// class Component
class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string,
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
*/

// functional Component
function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

/*
// class Component
class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        return(
            <img src={this.props.poster} alt="Movie Poster"/>
        )
    }
}
*/

// functional Component
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;