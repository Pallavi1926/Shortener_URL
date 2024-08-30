import logo from './logo.svg';
import './App.css';
import InputShortener from './InputShortener';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("")


  return (
    <div className="container">
    <InputShortener setInputValue={setInputValue}/>
    <BackgroundAnimate/>
    <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
