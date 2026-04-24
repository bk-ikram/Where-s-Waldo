import { useState } from "react";
import styles from "./selection-menu.module.css";

function SelectionItem({id, url, targetBox, setTargetFound}){
    const [ selectionResult, setSelectionResult ] = useState(null);

    
    function handleClick(e){
        //check if selection is correct. using targetbox coords and id
        //depending on answer set SelectionResult, set character as found.
        setTargetFound(id);
        setSelectionResult(true);
    }
    const borderColor = selectionResult             ? 'green'   : 
                        selectionResult === false   ? 'red'     :  'white';

    return (
        <li 
            key = {id} 
            className={styles.characterImg}
            onClick ={handleClick}
            style={{
                        borderColor: borderColor
                    }}
        >
            <img src ={url} />
        </li>
    )
}

export function SelectionMenu({characters, targetBox, setTargetFound }){
    return (
        <ul id={styles.selectionMenu}
            top={targetBox.x}
            right={targetBox.y - 60}
            style={{
                        top: targetBox.y - 130,
                        left: targetBox.x -100
                    }}
        >
            {characters.map( c => 
                <SelectionItem 
                    url = {c.file} 
                    id = {c.id}
                    setTargetFound={setTargetFound}
                    targetBox={targetBox}
                />
            )}
        </ul>
    )
}