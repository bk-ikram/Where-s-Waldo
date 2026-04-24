import styles from "./game-sidebar.module.css";



export default function GameSideBar({characters}){
    
    return (
        <div id={styles.sidebar}>
            <h2 id={styles.timer}>
                00:00:00
            </h2>
            <ul id={styles.characters}>
                { characters.map( c => 
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