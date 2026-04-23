import GameSideBar from "../GameSideBar/GameSideBar"
import styles from "./game-main.module.css";

export default function Game({status, startGame}){
    const characters =[];
    return (
        <div id={styles.gameContainer}>
            
            <div 
                id={styles.gameMain}
            >
                <img 
                    id={styles.gameMapImg}
                    src={`/images/SearchImage.jpg`}
                    alt ="Game Map"
                />
            </div>
            <GameSideBar
            characters = {characters} 
            />
        </div>
    )
}