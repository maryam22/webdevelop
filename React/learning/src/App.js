import './App.css';
import React from 'react';
import  Carousel  from './Components/Carousel';
import PanelNews from './Components/PanelNews'


function App() {
   const name = "Dave";
  return (
    <div className="App">
     
     <Carousel/>
     <PanelNews/>
     
    </div>
  );
}

export default App;
