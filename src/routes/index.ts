import express from 'express';
const router  = express.Router();

import apiRouter from './api';
/*import apisecurity from './api/security';
import apiteams from './api/teams';*/

router.get('/' , (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 router.get('/test', (_req, res)=>{
  res.json({msj:'Hello Test!'});
 });  

 router.use('/api',apiRouter);
 /*router.use('/api/security',apiRouter);
 router.use('/api/teams',apiRouter);*/

export default router;
