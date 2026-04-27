import { useState, useEffect } from "react";
import Game from "../Game/Game";
import Instructions from "../Instructions/Instructions"
import Modal from "../Modal/Modal"
import { saveGameStart,
        saveGameEnd
 } from "../../api/requests";
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
        console.log("status changed to:", status);
    }, [status]);


    useEffect(() => {
        if(status !== 1) return;

        function updateTimer(){
            if(!startTime) return;
            const now = new Date();
            const start = new Date(startTime);
            const milisecs = Math.floor((now-start));
            setTimeElapsed(milisecs);
        }
        const intervalID = setInterval(updateTimer,100);
        return () => clearInterval(intervalID);
    },[startTime, status]);

    async function startGame(formJson){
        //send to server and await
        const response = await saveGameStart(formJson);
        setScoreid(response?.id);
        setStartTime(response?.startTime);
        return setStatus(1);
    }

    async function endGame(){
        try{
            //send to server and await
            const response = await saveGameEnd(scoreid);
            setStatus(2);
        }
        catch(err){
            console.error("endGame failed:", err);
        }
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