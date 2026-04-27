import { useState, useEffect } from "react";
import Game from "../Game/Game";
import Instructions from "../Instructions/Instructions"
import Modal from "../Modal/Modal"
//import Scoreboard from "../Scoreboard/Scoreboard"



export default function LandingPage (){
    //game status can take 3 values:
    //  0 = Game has not yet started
    //  1 = Game in progress
    //  2 = Game has ended
    const [status, setStatus] = useState(0);
    const [ scoreid, setScoreid ] = useState();
    const [isOpen, setIsOpen] = useState(true);
    const [ startTime, setStartTime ] = useState();
    const [ timeElapsed, setTimeElapsed] = useState();

    useEffect(() => {
        if(!startTime) return;

        function updateTimer(){
            if(!startTime) return;
            const now = new Date();
            const start = new Date(startTime);
            const milisecs = Math.floor((now-start));
            setTimeElapsed(milisecs);
        }
        const intervalID = setInterval(updateTimer,100);
        return () => clearInterval(intervalID);
    },[startTime]);

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
            timeElapsed ={timeElapsed}

            />
            { status === 0
                && <Modal isOpen={isOpen}>
                        <Instructions 
                            startGame = {startGame}
                            setIsOpen = {setIsOpen}
                            setScoreid = {setScoreid}
                            setStartTime = {setStartTime}
                        />
                    </Modal>
            }

            {/*{ status === 2
                && <Scoreboard 
                    />
            }*/}
            
        </>
    )

}