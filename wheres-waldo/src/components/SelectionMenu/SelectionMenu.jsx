import { useState } from "react";
import styles from "./selection-menu.module.css";
import { verifyCharacterCoords } from "../../api/requests.js";

function SelectionItem({id, url, targetBox, setCharacterFound}){
    const [ selectionResult, setSelectionResult ] = useState(null);

    
    async function handleClick(e){
        //check if selection is correct. using targetbox coords and id
        //depending on answer set SelectionResult, set character as found.
        const result = await verifyCharacterCoords(targetBox?.x,
                                                targetBox?.y,
                                                id);
        if(result)
            setCharacterFound(id);
        setSelectionResult(result);
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

export function SelectionMenu({characters, targetBox, setCharacterFound }){
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
                    key= {c.id}
                    url = {c.url} 
                    id = {c.id}
                    setCharacterFound={setCharacterFound}
                    targetBox={targetBox}
                />
            )}
        </ul>
    )
}