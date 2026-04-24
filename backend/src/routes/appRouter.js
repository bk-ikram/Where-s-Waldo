
import { Router } from 'express';
const appRouter = Router();
import  { 
    getCharacters,
    postScore
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

//create score
appRouter.post("/api/score",
                postScore
)


export default appRouter;