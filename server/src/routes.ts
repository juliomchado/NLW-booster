import express from 'express'
import { celebrate, Joi } from 'celebrate';

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index)

routes.post('/points', upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        }),{
            abortEarly: false
        }
    }),
    pointsController.create)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)



export default routes;

// { 
// "name": "Mercado do seu Zé", 
// "email": "contato@imperatriz.com.br", 
// "whatsapp": "462131312313",
// "latitude": 37.421976, 
// "longitude": -122.0840161, 
// "city": "Rio do Sul",
// "uf": "SC", 
// "items": [
//     6
// ]
// }