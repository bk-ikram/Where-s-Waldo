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

export {
    getCharacters,
    saveGameStart,
    verifyCharacterCoords
};