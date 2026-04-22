import { prisma } from "../lib/prisma.js" ;
/*
async function getPosts(isPublic){
    return prisma.post.findMany({
        where: {
            ...( isPublic ? { published : true } : {} )
        },
        include: {
            user: {
                select: {
                    userName: true
                }
            },
            comments: true,
        }
    });
}
*/

export { 

 };