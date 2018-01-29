import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'



function Movie({title, poster, genres, summary}) {
	return (
		<div className="Movie">
			<div className="Movie_Columns">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className="Movie_Columns">
				<h1>{title}</h1>
				<div className="Movie_Genres">
					{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
				</div>
				<p className="Movie_Summary">
					<LinesEllipsis
					  text={summary}
					  maxLine='3'
					  ellipsis='...'
					  trimRight
					  basedOn='letters'
					/>
				</p>
			</div>
		</div>
	);
}

function MoviePoster({poster, alt}) {
	return (
		<img src={poster} alt={alt} className="Movie_Poster"/>
	);
}

function MovieGenre({genre}) {
	return (
		<span className="Movie_genre">{genre} </span>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
}



export default Movie;
