import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipse from 'react-lines-ellipsis';

// functional Component
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipse
                        text={synopsis}
                        maxLine='3'
                        ellipsis='--more--'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenres({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;