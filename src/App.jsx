//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import BoxAnimation from './components/BoxAnimation13.2';
import { useEffect } from "react";
//import FavoriteColor from './components/FavoriteColor';

/*function App() {
 
  return (
    //13.1<FavoriteColor/>

    

  


  )
}
*/


/*
import React, { useState } from "react";
import Box from "./components/BoxAnimation13.2";
//13.2
const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([...boxes, <Box key={boxes.length} removeBox={removeBox} />]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((box, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addBox}>Add Box</button>
      {boxes.map((box, index) => (
        <div key={index} style={{ position: "relative" }}>
          {box}
        </div>
        

      ))}
    </div>
  );
};
*/

export default App




