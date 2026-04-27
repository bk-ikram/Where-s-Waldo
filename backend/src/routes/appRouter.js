
import { Router } from 'express';
const appRouter = Router();
import  { 
    getCharacters,
    postScore,
    postCharacterVerification,
    updateScore,
    getScores
 } from "../controllers/appController.js";


//universal
appRouter.use((req, res, next) => {
    if(req.user) res.locals.user = req.user;
    next();
})

//get characters
appRouter.get("/api/characters",
                getCharacters
)

//create score record
appRouter.post("/api/score",
                postScore
)

//verify character location
appRouter.post("/api/character/verify",
                postCharacterVerification
)

//update score record with end time
appRouter.patch("/api/score",
                updateScore
)

appRouter.get("/api/scores",
                getScores
)

export default appRouter;