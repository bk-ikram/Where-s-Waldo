import styles from "./game-sidebar.module.css";
import formatMilliseconds from "../../utils/formatMilliseconds";

export default function GameSideBar({characters, timeElapsed}){
    
    return (
        <div id={styles.sidebar}>
            <h2 id={styles.timer}>
                { formatMilliseconds(timeElapsed) }
            </h2>
            <ul id={styles.characters}>
                { characters.map( c => 
                    <li key = {c.id}>
                        <div className={styles.characterImg}>
                            <img src ={c.url} />
                        </div>
                        <h3>{c.name}</h3>
                    </li>
                    )
                }
            </ul>
        </div>
    )
};