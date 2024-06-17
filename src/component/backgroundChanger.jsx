import { atom, atomFamily, useRecoilValue } from "recoil";
import { TODOS } from "./todos";
import './background.css'
import { useEffect } from "react";

  const colorAtom = atomFamily({
    key: "colorAtom",
    default: id => {
        const todo =  TODOS.find(x => x.id ===id) 
        return todo.color
    }
})

export function BackgroundChanger({id,setId}) {
    const backgroundColors = useRecoilValue(colorAtom(id))

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColors
    })
    console.log(backgroundColors)
    return <div style={{
        backgroundColor: {backgroundColors}
    }} className="container">
       
            <button style={{
                backgroundColor: "red"
            }} onClick={() =>  setId(1) } >Red</button>
         <button style={{
                backgroundColor: "yellow"
            }}onClick={() =>  setId(2) } >Yellow</button>
         <button style={{
                backgroundColor: "black",
                color: "white"
            }} onClick={() =>  setId(3) } >Black</button>
         <button style={{
                backgroundColor: "purple",
                color: "white"
            }} onClick={() =>  setId(4) } >Purple</button>
         <button style={{
                backgroundColor: "green"
            }}onClick={() =>  setId(5) } >Green</button>
         <button style={{
                backgroundColor: "blue"
            }} onClick={() =>  setId(6) } >Blue</button>
         <button style={{
                backgroundColor: "white",
                color: "black"
            }} onClick={() =>  setId(7) } >Default</button>


       
    </div>
}