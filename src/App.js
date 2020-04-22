import React from 'react'
import './style.css'
import image from "./imageInSrc.jpg"

function App() {
  return (
    <React.Fragment>
      <div className='cadre'>
      <h1 className='title red'>Your name here</h1>  

<br />  

<img src={image} /> 
<br /> 

<img src="/imageInPublic.png" />  
<br /> 
<video width="320" height="240" controls />  
<source src="myVideo.mp4" type="video/mp4" /> 

      </div>
 
    

    </React.Fragment>
  );
}

export default App;
