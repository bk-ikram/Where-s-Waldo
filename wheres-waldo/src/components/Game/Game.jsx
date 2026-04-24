import GameSideBar from "../GameSideBar/GameSideBar"
import styles from "./game-main.module.css";
import characters from "../../characters.js";
import { useState, useEffect } from "react";
import { SelectionMenu } from "../SelectionMenu/SelectionMenu.jsx";

const getRandomElements = (arr, n) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Simple shuffle
  return shuffled.slice(0, n); // Take first n elements
};

function getImageCursorCoords(e){
    const x = e.offsetX || e.nativeEvent.offsetX;
    const y = e.offsetY || e.nativeEvent.offsetY;
    console.log(`X: ${x}, Y: ${y}`);
    return { x, y };
}



export default function Game({status, startGame}){
    const [ targetBox, setTargetBox ] = useState({});
    const [ selectedChars ] = useState(() => getRandomElements(characters,3));

    function handleImageClick(e){
        console.log("handler clicked");
        setTargetBox(prev => prev?.x
                                ? {}
                                : getImageCursorCoords(e)
        )
        return;
    }
    
    return (
        <div id={styles.gameContainer}>
            <div id={styles.gameMain}>
                <img 
                    id={styles.gameMapImg}
                    src={`/images/SearchImage.jpg`}
                    alt ="Game Map"
                    onClick={handleImageClick}
                />
                { targetBox?.x &&
                <img 
                    id={styles.targetBoxImg}
                    src={`/images/targetBox.png`}
                    style={{
                        top: targetBox.y - 25,
                        left: targetBox.x - 25
                    }}
                />
                }
                {/* targetBox?.x &&
                <SelectionMenu 
                    characters={selectedChars}
                />
                */}

            </div>
            <GameSideBar
            characters = {selectedChars} 
            />
        </div>
    )
}