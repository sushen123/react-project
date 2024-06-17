import { useState } from "react";

const wordsPool = [
    "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.",
    "Nulla", "facilisi.", "Cras", "convallis", "sodales", "neque,", "eget", "aliquet", 
    "mi", "bibendum", "ac.", "Pellentesque", "habitant", "morbi", "tristique", 
    "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas.",
    "Quisque", "eleifend", "nulla", "nec", "purus", "bibendum,", "sit", "amet", 
    "interdum", "ex", "maximus.", "Fusce", "faucibus", "convallis", "magna,", "vitae", 
    "feugiat", "velit", "convallis", "a."
  ];



export function ParagraphsGenerator(nw) {

    let paragraph = ""
    for(let i=0;i<nw; i++) {
        const randomWord = wordsPool[Math.floor(Math.random() * wordsPool.length)]
        paragraph = paragraph + randomWord + (i < nw -1 ? " ": "");
    }

    return paragraph
}

export function Para() {
    const [nw,setNw] = useState(0);
    const [genratedParagraph, setGenratedParagraph]= useState("");

    return <>
    <h1>Para Generator</h1>
    <input type="text" placeholder="Enter Number of Words" onChange={(e) => {
        setNw(parseInt(e.target.value));
    }} />
    <button className="generate" onClick={() => {
       const paragraph =  ParagraphsGenerator(nw)
       setGenratedParagraph(paragraph)
    }}>Generate</button>
    <div>
        <h3>Paragraph</h3>
        <p>{genratedParagraph}</p>
    </div>
    </>
}