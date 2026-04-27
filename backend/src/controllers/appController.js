import { 
    getCharactersRepo,
    createScore,
    getCharacterCoords
 } from "../../repositories/queries.js";


async function getCharacters( req, res) {
    const characters =  await getCharactersRepo();
    res.json(characters);
}

async function postScore( req, res) {
    const displayName = req?.body?.displayName;
    const score =  await createScore(displayName);
    res.json(score);
}

async function postCharacterVerification (req, res){
    const {x, y, id} = req.body;
    const character = await getCharacterCoords(Number(id));

    const ref_x = character?.x;
    const ref_y = character?.y;
    //a tolerance of 50 pixels is set for each coordinate.
    const isMatch = Math.abs(ref_x - Number(x)) <= 50
                    && Math.abs(ref_y - Number(y)) <= 50;
    res.json(isMatch);
}


export {
    getCharacters,
    postScore,
    postCharacterVerification,
}