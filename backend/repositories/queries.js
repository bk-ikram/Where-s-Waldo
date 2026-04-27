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

async function saveScoreEndTime(id){
    return prisma.score.update({
        where: {
            id: id
        },
        data: {
            endTime: new Date(),
        }
    })
}

export { 
    getCharactersRepo,
    createScore,
    getCharacterCoords,
    saveScoreEndTime
 };