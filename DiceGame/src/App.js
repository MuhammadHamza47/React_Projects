// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

const togleGamePlay = () =>{
  setIsGameStarted((prev)=> !prev);
}
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={togleGamePlay}/>} 
    </>
  );
}

export default App;
