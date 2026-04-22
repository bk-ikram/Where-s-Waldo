
import { Router } from 'express';
const appRouter = Router();
import  { 
 } from "../controllers/appController.js";


//universal
appRouter.use((req, res, next) => {
    if(req.user) res.locals.user = req.user;
    next();
})

//posts
/*
appRouter.get("/api/posts",
                optionalAuth,
                postsGet);
*/

export default appRouter;