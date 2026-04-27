import apiFetch from "../utils/apiFetch"

async function getCharacters(){
    return apiFetch("/api/characters");
}

async function saveGameStart(formJson){
    return apiFetch("/api/score",{
        method: "POST",
        body: JSON.stringify(formJson)
    })
}

async function verifyCharacterCoords(x, y, id){
    return apiFetch(`/api/character/verify`, {
        method: "POST",
        body: JSON.stringify({x, y, id})
    });
}

async function saveGameEnd(id){
    return apiFetch("/api/score",{
        method: "PATCH",
        body: JSON.stringify({id})
    })
}

async function getTop5Scores(){
    return apiFetch("/api/scores?sort=duration&limit=5");
}

export {
    getCharacters,
    saveGameStart,
    verifyCharacterCoords,
    saveGameEnd,
    getTop5Scores
};