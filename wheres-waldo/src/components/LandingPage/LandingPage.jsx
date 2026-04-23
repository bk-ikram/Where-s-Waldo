import { useState } from "react";
import Game from "../Game/Game";
//import Instructions from "../Instructions/Instructions"
//import Scoreboard from "../Scoreboard/Scoreboard"



export default function LandingPage (){
    //game status can take 3 values:
    //  0 = Game has not yet started
    //  1 = Game in progress
    //  2 = Game has ended
    const [status, setStatus] = useState(0);

    function startGame(){
        return setStatus(1);
    }

    function endGame(){
        return setStatus(2);
    }
    
    return (
        <>
            <Game
            status = {status}
            endGame = {endGame}

            />
            {/*{ status === 0
                && <Instructions 
                    startGame = {startGame}
                    />
            }

            { status === 2
                && <Scoreboard 
                    />
            }*/}
            
        </>
    )

}