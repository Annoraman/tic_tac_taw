import { MouseEvent, SetStateAction, Dispatch, useState } from "react";

type cellProps = {
    id: number,
    go: string,
    setGo:Dispatch<SetStateAction<string>>,
    cells: string[],
    setCell: Dispatch<SetStateAction<string[]>>
}
const Cell = ({id, go, setGo,cells, setCell}:cellProps) => {

const [mark,setMark] = useState("");
const [classStyle,setClassStyle ]= useState("");
const player = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
    const taken = cells[id];
    if (!cells[id]){
        if(go==='O'){
            handleGhange("O");
            setGo("X")
            setClassStyle("o")
        } else {
            handleGhange("X");
            setClassStyle("x")
            setGo("O")
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

