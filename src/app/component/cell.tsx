import { MouseEvent, SetStateAction, Dispatch, useState } from "react";

type cellProps = {
    id: number,
    go: string,
    setGo:Dispatch<SetStateAction<string>>,
    cells: string[],
    setCell: Dispatch<SetStateAction<string[]>>,
    W_message:string,
}
const Cell = ({id, go, setGo,cells, setCell, W_message}:cellProps) => {
    const [player_o, setPlayer_o] = useState("");
    const [player_x, setPlayer_x] = useState("");
    const [mark,setMark] = useState("");
    const [classStyle,setClassStyle ]= useState("");
    const player = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
        const taken = cells[id];
        if (!cells[id]){
            
            if(!W_message){
                    if(go==='O'){
                    handleGhange("O");
                    setGo("X")
                    // setPlayer_o(p=>p+1);
                    setClassStyle("o")
                } else {
                    handleGhange("X");
                    setGo("O");
                    // setPlayer_x(x=>x+1);
                    setClassStyle("x");
                    
                }
            }
        }

    }

    const handleGhange = (player:string)=>{
        const copyOfCells = [...cells];
        copyOfCells[id] = player;
        setCell(copyOfCells);
        setMark(copyOfCells[id]);
        
    }
        return (
            <div className="cells mark" onClick={(e)=>player(e)}> 

                <div  className={classStyle}>{mark}</div>  

            </div>
        );
}

export default Cell;

