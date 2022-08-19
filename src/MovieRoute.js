import React from 'react'
import {useParams,useLocation} from 'react-router-dom' 
import ReactPlayer from 'react-player/youtube'

export default function MovieRoute() {
    const{id}=useParams();
    const location= useLocation();

  return (
    <div  style={{
      backgroundImage: `url(${location.state.Trailer})`, backgroundSize:'contain',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',height:'100vh',marginTop:'20px'}}>

      <div className='tr1'  >
      <ReactPlayer autoPlay='true'
          url={location.state.annonce}
         config={{
              youtube: {
             playerVars: { showinfo: 1 }
             },
              facebook: {
           appId: '12345'
             }
        }}
/>
    </div>
    <div className='tr2'>
      <h1> {location.state.description}</h1>

    </div>
    </div>
    
  );
  
}

