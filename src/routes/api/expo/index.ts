import express from 'express';
const router = express.Router();

router.get('/', (_req,res)=>{
    res.json([{nombre:'Francisco',
               apellido:'escoto',
               edad: 27,
               clases:["movil","redes","hacking"]},
              {
                nombre:"jose",
                apellido:"Monaco",
                edad:30,
                clases:["espaniol","base de datos"]
              }
            ])
})

export default router;