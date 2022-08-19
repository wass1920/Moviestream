import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MoviePoster = (  ) => {
  

    return (
        <div >
           <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'Red', fontSize:'50px', textAlign:'end', fontFamily:'fantasy' }}>Horreur</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'Red', fontSize:'50px', textAlign:'end',fontFamily:'fantasy' }}>Thriller</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'Red', fontSize:'50px', textAlign:'end',fontFamily:'fantasy' }}>Action</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};


export default MoviePoster;