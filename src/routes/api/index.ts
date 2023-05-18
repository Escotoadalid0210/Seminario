import express from 'express';
const router = express.Router();
import projectsRouter from './projects';
import securityRouter from './security';
import teamsRouter from './teams';
import expoRoter from './expo';

router.use('/projects', projectsRouter);
router.use('/security',securityRouter);
router.use('/teams',teamsRouter);
router.use('/expo',expoRoter)

export default router;