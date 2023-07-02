import { Router } from 'express';
import verify  from '../../middleware/verify.js';

const routerServer = Router();

routerTopic.get('/usuarios',verify, ()=>{
    res.json("Esto devuelve todos los usuarios y sus contraseñas");
});

export default routerTopic;