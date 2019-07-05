import React from 'react';
import Flybeta from './components/flybeta'
import Flight from './components/Flight'
import './css/mycss.css'

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
      < Flybeta  />
      < Flight />
    
        
      </div>
    );
  }
}

export default App;
