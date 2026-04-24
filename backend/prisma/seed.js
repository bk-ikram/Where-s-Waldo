import { prisma } from "../lib/prisma.js"

async function main(){

    //create a few posts
    await prisma.character.createMany({
        data: [
             {
                name: "Conan",
                url: "/images/conan.jpg",
                x: 2924,
                y: 147

            },
            {
                name: "Gendo",
                url: "/images/Gendo_Ikari.jpg",
                x: 131,
                y: 57
            },
            {
                name: "Kenshiro",
                url: "/images/kenshiro.jpg",
                x: 2867,
                y: 1329
            },
            {
                name: "L",
                url: "/images/L.jpg",
                x: 1353,
                y: 313
            },
            {
                name: "Crash",
                url: "/images/crash-bandicoot.jpg",
                x: 2617,
                y: 733
            },
            {
                name: "Vash",
                url: "/images/Vash.jpg",
                x: 1075,
                y: 73
            },
    
        ]

    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log("Created seed data in DB.");
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        console.log("Could not create seed data in DB.");
        process.exit(1);
    });