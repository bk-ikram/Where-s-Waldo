import apiFetch from "../utils/apiFetch"

async function getCharacters(){
    return apiFetch("/api/characters");
}


/*
async function postComment(apiFetch, formJson){
    const { id } = formJson
    return apiFetch(`/api/post/${id}/comment`, {
        method: "POST",
        body: JSON.stringify(formJson)
    });
}

*/

async function saveGameStart(formJson){
    return apiFetch("/api/score",{
        method: "POST",
        body: JSON.stringify(formJson)
    })
}


export {
    getCharacters,
    saveGameStart
};