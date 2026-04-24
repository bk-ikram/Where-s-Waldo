import styles from "./game-sidebar.module.css";

function formatMilliseconds(ms) {
  // Extract units
  const milliseconds = ms % 1000;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  // Format with leading zeros
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  const msFormatted = String(milliseconds).padStart(2, '0');

  return `${m}:${s}.${msFormatted}`;
}

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