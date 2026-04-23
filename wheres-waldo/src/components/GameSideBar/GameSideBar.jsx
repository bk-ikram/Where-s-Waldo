import styles from "./game-sidebar.module.css";
import characters from "../../characters.js";

const getRandomElements = (arr, n) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Simple shuffle
  return shuffled.slice(0, n); // Take first n elements
};


export default function GameSideBar({}){
    const selectedChars = getRandomElements(characters,3);
    return (
        <div id={styles.sidebar}>
            <h2 id={styles.timer}>
                00:00:00
            </h2>
            <ul id={styles.characters}>
                { selectedChars.map( c => 
                    <li key = {c.id}>
                        <div className={styles.characterImg}>
                            <img src ={c.file} />
                        </div>
                        <h3>{c.name}</h3>
                    </li>
                    )
                }
            </ul>
        </div>
    )
};