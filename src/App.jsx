import React, { useMemo, useState } from 'react'
import './App.css';
const App = () => {
  //this is Bmi calculator
  const [height,setheight] = useState(180);
  const [weight,setweight] = useState(70);
  const handleweightChange = (e) =>{
      setweight(e.target.value);
  }
  const handleheightChange = (e) =>{
      setheight(e.target.value);
  }
  const output = useMemo(()=>{
      const Calculateheight = height / 100;
      return (weight / (Calculateheight * Calculateheight).toFixed(0))
  },[weight,height])
  return (
    <div className='main'>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
          <p className='slider-output'>Weight:{weight}kg</p>
          <input className='input-slider' type="range" step="1" min="40" max="200" onChange={handleweightChange}/>
          <p className='slider-output'>Height:{height}cm</p>
          <input className='input-slider' type="range" step="1" min="140" max="220" onChange={handleheightChange} />
        </div>
        <div className='output-section'>
          <p>Your BMI is :</p>
          <p className='output'>{output}</p>
        </div>
    </div>
  )
}

export default App
