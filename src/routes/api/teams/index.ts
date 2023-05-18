import express from 'express';
const router = express.Router();

router.get('/', (_req, res)=>{
    res.json({version:3, hola:'hola desde teams'});
})

export default router;