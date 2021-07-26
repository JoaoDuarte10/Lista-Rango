import { Router } from 'express';

import { ListAllRestaurantesController } from '../controllers/ListAllRestaurantesController';
import { NewRestauranteController } from '../controllers/NewRestauranteController';
import { ListRestauranteController } from '../controllers/ListRestauranteController';

const router = Router();

const listAllRestauranteController = new ListAllRestaurantesController();
const newRestauranteController = new NewRestauranteController();
const listRestauranteController = new ListRestauranteController();

router.get('/all-restaurantes', listAllRestauranteController.handle)
router.get('/restaurante/:id', listRestauranteController.handle)

router.post('/new-restaurante', newRestauranteController.handle)

export { router }