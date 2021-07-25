import { Router } from 'express';

import { ListAllRestaurantesController } from '../controllers/ListAllRestaurantesController';
import { NewRestauranteController } from '../controllers/NewRestauranteController';

const router = Router();

const listAllRestauranteController = new ListAllRestaurantesController();
const newRestauranteController = new NewRestauranteController();

router.get('/all-restaurantes', listAllRestauranteController.handle)

router.post('/new-restaurante', newRestauranteController.handle)

export { router }