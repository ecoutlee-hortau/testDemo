import React, {useState} from "react";
import "./styles.css";

import ComponentButton from './ComponentButton.jsx'


export default function App() {
  const [disabled, setdisabled] = useState(false)

  const handleClick = () => {
    setdisabled(!disabled)
  }

  return (
    <div className="App">
      <button
        className='displayButton'
        onClick={handleClick}
        type='button'
      >
        <span>{'Click me to disabled next button'}</span>
      </button>
      <ComponentButton  disabled={disabled}/>
    </div>
  );
}
