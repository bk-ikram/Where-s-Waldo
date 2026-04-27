import GameSideBar from "../GameSideBar/GameSideBar"
import styles from "./game-main.module.css";
import { useState, useEffect } from "react";
import { SelectionMenu } from "../SelectionMenu/SelectionMenu.jsx";
import { getCharacters as getCharactersAPI} from "../../api/requests.js";


const getRandomElements = (arr, n) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Simple shuffle
  return shuffled.slice(0, n); // Take first n elements
};

const getCharacters = async (n) =>{
    const characters = await getCharactersAPI();
    const chars = getRandomElements(characters,n);
    //Add starting status for each character
    return chars.map( c => ({...c, found: false}));
}

function getImageCursorCoords(e){
    const x = e.offsetX || e.nativeEvent.offsetX;
    const y = e.offsetY || e.nativeEvent.offsetY;
    return { x, y };
}



export default function Game({endGame, timeElapsed}){
    const [ targetBox, setTargetBox ] = useState({});
    const [ selectedChars, setSelectedChars ] = useState([]);

    useEffect(() => {
        async function load() {
            const chars = await getCharacters(3);
            setSelectedChars(chars);
        }
        load();
    }, []);

    useEffect(() => {
        ( async () => {
            if (checkEndGameConditions())
                await endGame();
        })();
        
    }, [selectedChars]);


    function handleImageClick(e){
        setTargetBox(prev => prev?.x
                                ? {}
                                : getImageCursorCoords(e)
        )
        return;
    }
    
    function setCharacterFound(id){
        setSelectedChars(prev => 
            prev.map( c => c.id === id ? {...c, found: true } : c)
        )
    }
    //check end condition, stop timer, update db entry
    function checkEndGameConditions(){
        return selectedChars.length > 0 && 
                selectedChars.every(c => c.found);
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
                { targetBox?.x &&
                <SelectionMenu 
                    characters={selectedChars.filter(c => !c.found)}
                    targetBox = {targetBox}
                    setCharacterFound = {setCharacterFound}
                />
                }

            </div>
            <GameSideBar
            characters = {selectedChars.filter(c => !c.found)} 
            timeElapsed = {timeElapsed}
            />
        </div>
    )
}