import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import Row from 'react-bootstrap/Row';
const MoviesList = ({ moviesArray }) => {
  return (
    <div className='Listefilm'>
 <Row xs={1} md={3} className="g-4">

      {moviesArray.map((movie, key) => (
        <MovieCard movie={movie} key={key} />
      ))}

    </Row>
    </div>
  );
};

MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MoviesList;