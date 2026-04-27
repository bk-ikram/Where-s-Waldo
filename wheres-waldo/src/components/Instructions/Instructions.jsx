
export default function Instructions({startGame, setIsOpen}){
//to change component to modal dialog
    async function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try{
            await startGame(formJson);
        }
        catch(err){
            console.error(err)
        }

    }
    return(
        <>
            <h1>Find the Character!</h1>
            <p>In this game, you need to find 3 hidden characters among many beloved animated characters.</p>
            <p>Do you think you can do it faster than anyone else has?</p>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Enter your name to save your score     </label>
                    <input type="text" name="displayName" required></input>
                </p>
                <button type="submit">START</button>
            </form>
        </>
    )
}