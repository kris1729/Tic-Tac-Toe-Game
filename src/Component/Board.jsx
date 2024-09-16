import React, { useState } from "react";
import Squre from "./Squre";
import "../App.css";

const Board = () => {
  const [state, setState] = useState(Array(0).fill(null));
  const [isXterm, setXterm] = useState(true);

  const onclickHandler = (index) => {
    if (state[index] != null) return;
    const copyState = [...state];
    copyState[index] = isXterm ? "X" : "O";
    setXterm(!isXterm);
    setState(copyState);

    
    };
// winner code

const checkWinner = ()=>{
    const winnerlogic = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let logic of winnerlogic){
      const [a,b,c] = logic;
      if(state[a]!==null&&state[a]===state[b]&&state[b]===state[c])
       return state[a];
    }
    return false;
};
 const anyOneWinner = checkWinner();

 const playAgain = ()=>{
    setState(Array(9).fill(null))
 }

  return (
    
    anyOneWinner?<><h1>Winner is {anyOneWinner}</h1><button onClick={playAgain}>Play Again</button></> :<div className="game">
    <h3>Now is {isXterm?"X":"O"} term</h3>
    <div className="board-container">
       
      <div className="row">
        <Squre onClick={() => onclickHandler(0)} val={state[0]} />
        <Squre onClick={() => onclickHandler(1)} val={state[1]} />
        <Squre onClick={() => onclickHandler(2)} val={state[2]} />
      </div>
      <div className="row">
        <Squre onClick={() => onclickHandler(3)} val={state[3]} />
        <Squre onClick={() => onclickHandler(4)} val={state[4]} />
        <Squre  onClick={() => onclickHandler(5)} val={state[5]} />
      </div>
      <div className="row">
        <Squre onClick={() => onclickHandler(6)} val={state[6]} />
        <Squre onClick={() => onclickHandler(7)} val={state[7]} />
        <Squre onClick={() => onclickHandler(8)} val={state[8]} />
      </div>
    </div>
    </div>
    
    
  );
};

export default Board;
