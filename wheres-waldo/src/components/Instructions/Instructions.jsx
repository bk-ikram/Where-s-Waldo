export default function Instructions({startGame}){
//to change component to modal dialog
    function handleStart(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try{
            //send to server and await
            startGame();
        }
        catch(err){
            //do nothing for now
        }

    }
    return(
        <>
            <h1>Find the Character!</h1>
            <p>In this game, you need to find 3 hidden characters among many beloved animated characters.</p>
            <p>Do you think you can do it faster than anyone else has?</p>
            <form>
                <p>
                    <label>Enter your name to save your score</label>
                    <input type="text" name="displayName" required></input>
                </p>
                <button onClick={ (e) => handleStart(e) }>START</button>
            </form>
        </>
    )
}