import { Router } from 'express';
import {getAllTopics} from '../controllers/topics_controller.js';
import verify  from '../../middleware/verify.js';

const routerTopic = Router();

routerTopic.get('/topics',verify, getAllTopics);

export default routerTopic;