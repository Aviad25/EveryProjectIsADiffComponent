//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import BoxAnimation from './components/BoxAnimation13.2';
//import { useEffect } from "react";
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
//import { useState,useEffect } from 'react';
import React from 'react';
import './App.css'

//13.3




import { useState, useEffect } from 'react';

const App = () => {
  const [color, setColor] = useState('red');
  const [isCircle, setIsCircle] = useState(false);

  useEffect(() => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    let colorIndex = 0;
    let changeCount = 0;

    const intervalId = setInterval(() => {
      setColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
      changeCount++;

      if (changeCount === 5) {
        setIsCircle(true);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const boxStyle = {
    width: '100px',
    height: '100px',
    borderRadius: isCircle ? '50%' : '0',
    backgroundColor: color,
    transition: 'border-radius 0.5s ease',
  };

  return <div style={boxStyle}></div>;
};






export default App




