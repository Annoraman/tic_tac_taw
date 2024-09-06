"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import Cell from "./component/cell";

const winnerChecks = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
export default function Home() {
  const [cells,setCell]=useState(["","","","","","","","",""]);
  const [go,setGo]= useState("O");
  const  [winning_message,setWinning_message] = useState("")
 
  useEffect(()=>{
    winnerChecks.forEach((winnerCheck) =>{
    const x_luck = winnerCheck.every((cell) => cells[cell]==="X");
    const O_luck = winnerCheck.every((cell) => cells[cell]==="O");
    
    if (x_luck) {
      setWinning_message("THE PLAYER X IS WINNING 🏆 ");
      } 
    else if(O_luck) { 
      setWinning_message("THE PLAYER O IS WINNING 🏆 ");
      }
    } );
  },[cells])
  
  return (
    <main className="container">
       <div className="message">{winning_message?<div> {winning_message} </div>:<div> Its Now {go} Turn </div>} 
       
       </div>
      <div className="game-border">
        {cells.map((c, index)=>(
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCell={setCell} W_message={winning_message}/>
        ))}
      </div>
    </main>
  );
}
