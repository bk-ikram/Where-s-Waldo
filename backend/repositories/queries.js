import { prisma } from "../lib/prisma.js" ;

async function getCharactersRepo(){
    return prisma.character.findMany();
}

async function createScore(displayName){
    return prisma.score.create({
        data: {
            displayName: displayName
        }
    })
}

async function getCharacterCoords(id){
    return prisma.character.findUnique({
        where: { id: id },
    });
}

export { 
    getCharactersRepo,
    createScore,
    getCharacterCoords,
 };