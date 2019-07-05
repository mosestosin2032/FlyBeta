import React from 'react';
import logo from '../images/FLYBETA LOGO.png'
import wallpaper from '../images/wallpaper.jpg'

class Flybeta extends React.Component {
    
  render() {
        
    const wallpaper1 = wallpaper;
      const images = logo;
      const message = 'Book Your Ultimate Traveling Experience'
      return (
        <div className="App">
       
        <div className="top_nav">
           <div>
              <img alt='logo' width="130px" src={images}/>
            </div>
      
          <div>
           <p>login</p>  
          </div>
       </div>
        
      <div className='welcome_message_div'>
          <h1 className='welcome_message_text'>{message}</h1>
                    
                     
           <img className='welcome_message_img' src={wallpaper1} width='100%' height="300px" alt='wallpaper'/>
      </div>

            
        </div>
      );
    }
  }

  export default Flybeta;