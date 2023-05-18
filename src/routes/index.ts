import express from 'express';
const router  = express.Router();

import apiRouter from './api/projects';
import apisecurity from './api/security';
import apiteams from './api/teams';

router.get('/' , (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 router.get('/test', (_req, res)=>{
  res.json({msj:'Hello Test'});
 });  

 router.use('/api/projects',apiRouter);
 router.use('/api/security',apisecurity);
 router.use('/api/teams',apiteams);

export default router;
