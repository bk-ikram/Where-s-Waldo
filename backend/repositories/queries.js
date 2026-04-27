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
    const score = await prisma.score.findUnique({
        where: {
            id: id
        }
    });

    const startTime = score.startTime;
    const endTime = new Date();
    const diff = Math.abs(endTime - startTime)/1000;
    return prisma.score.update({
        where: {
            id: id
        },
        data: {
            endTime: endTime,
            duration: diff
        }
    })
}

export { 
    getCharactersRepo,
    createScore,
    getCharacterCoords,
    saveScoreEndTime
 };