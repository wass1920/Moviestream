import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ movie: { title, posterUrl, description, rate,id,annonce } }) => {
  const navigate = useNavigate();
    
    return (
    <div  >

     <Card  style={{ height: `600px`, width:'350px' , color:'white',background:'unset', textAlign:'center',fontFamily:'unset'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Card.Img  variant="top" src={posterUrl} style={{ height: `350px`, width:'320px' }} >  

          </Card.Img >   
        <Card.Text>
            {description}
        </Card.Text>
        
     </Card.Body>
     <Button variant="outline-danger">
     <Link    to={`${id}`}
            state={{Trailer:posterUrl,description:description,annonce:annonce}}>
      see
          </Link> 
          </Button>
          <Button variant="outline-danger" className="btn" onClick={() => navigate("/AddMovie")}>Add</Button>
     </Card>

    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;