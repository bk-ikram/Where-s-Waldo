import { 
    getCharactersRepo,
    createScore
 } from "../../repositories/queries.js";

 /*
async function postsGet( req, res){
    const isPublic = req.user ? false : true;
    const posts = await getPosts(isPublic);
    res.json(posts);
};
*/

async function getCharacters( req, res) {
    const characters =  await getCharactersRepo();
    res.json(characters);
}

async function postScore( req, res) {
    const displayName = req?.body?.displayName;
    const score =  await createScore(displayName);
    res.json(score);
}


export {
    getCharacters,
    postScore,
}