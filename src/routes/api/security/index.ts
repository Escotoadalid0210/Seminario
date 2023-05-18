import express from 'express';
const router = express.Router();

/*router.get('/', (_req, res)=>{
    res.json({version:2,hola:'Hola adalid'});
});*/

/*router.get('/', (_req, res)=>{
    res.json('{hola}{como}{estas}');
});*/

/*router.get('/', (_req, res)=>{
    res.json({"nombre":"cristiano",
              "Apellido":"Gomez",
              "edad":36,
              "equipos":["java","javascript","python"]})
});*/
router.get('/', (_req, res)=>{
    res.json([
             {"nombre":"cristiano",
              "Apellido":"Gomez",
              "edad":36,
              "equipos":["java","javascript","python"]},

              {"nombre":"Franciso",
              "Apellido":"Gomez",
              "edad":36,
              "equipos":["java","javascript","python"]},

              {"nombre":"Adalid",
              "Apellido":"Gomez",
              "edad":36,
              "equipos":["java","javascript","python"]}
            ])
});


export default router;