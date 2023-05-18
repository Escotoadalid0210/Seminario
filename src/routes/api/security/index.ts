import express from 'express';
const router = express.Router();

router.get('/', (_req, res)=>{
    res.json({version:2,hola:'Hola adalid'});
})

export default router;