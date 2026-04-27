import formatMilliseconds from "../../utils/formatMilliseconds";
import { getTop5Scores
 } from "../../api/requests";

 import styles from "./scoreboard.module.css";
import { useEffect, useState } from "react";

export default function ScoreBoard({score}){
    const [ topScores, setTopScores] = useState([]);

    useEffect(() => {
        (async ()=>{
            const scores = await getTop5Scores();
            setTopScores(scores);
        })()
    } ,[]);

    const isOwnScoreInTop5 = topScores.some( s=> s.id === score?.id);


    return (
        <div id={styles.scoreboard}>
            <h1>LEADERBOARD</h1>    
            <h2>TOP SCORES</h2>
            <ul>
                <li>
                    <span>USERNAME</span>
                    <span>TIME</span>
                </li>
                {topScores.map( s => 
                    <li key={s.id}
                        style= {{
                            color: s.id === score?.id ? 'yellow' : ''
                        }}
                    >
                        <span>{s.displayName}</span>
                        <span>{formatMilliseconds(s.duration*1000)}</span>
                    </li>
                )}

                {!isOwnScoreInTop5 &&
                    <li style= {{
                            color: 'yellow',
                            marginTop: "10px"
                        }}>
                        <span>{score?.displayName}</span>
                        <span>{formatMilliseconds(score?.duration*1000)}</span>
                    </li>
                }
            </ul>
            <button onClick={() => window.location.reload()}>RETRY</button>
        </div>
    )
}