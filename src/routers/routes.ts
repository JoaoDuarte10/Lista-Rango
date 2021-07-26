import { Router } from 'express';

import { ListAllRestaurantesController } from '../controllers/ListAllRestaurantesController';
import { NewRestauranteController } from '../controllers/NewRestauranteController';
import { ListRestauranteController } from '../controllers/ListRestauranteController';
import { DeleteRestauranteController } from '../controllers/DeleteRestauranteController';

const router = Router();

const listAllRestauranteController = new ListAllRestaurantesController();
const newRestauranteController = new NewRestauranteController();
const listRestauranteController = new ListRestauranteController();
const deleteRestauranteController = new DeleteRestauranteController();

router.get('/all-restaurantes', listAllRestauranteController.handle)
router.get('/restaurante/:id', listRestauranteController.handle)

router.post('/new-restaurante', newRestauranteController.handle)

router.delete('/delete-restaurante', deleteRestauranteController.handle)

export { router }