import React from 'react';
import ima1 from './1.png';
import ima2 from './2.png';
import ima3 from './3.png'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Site Web</h1>

        <div className='center'>
        <img src={ima1} alt="club bucarabike 1" />
        <p>@ clupbucarabike</p>
        </div>

 <div className='center'>
        <img src={ima2} alt="club bucarabike 2" />
        <p>@ clupbucarabike</p>  </div>

<div className='center'>       
        <img src={ima3} alt="club bucarabike 3" />
        <p>@ clupbucarabike</p>  </div>
      </header>
    </div>
  );
}

export default App;
