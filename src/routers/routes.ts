import { Router } from 'express';

import { ListAllRestaurantesController } from '../controllers/ListAllRestaurantesController';
import { NewRestauranteController } from '../controllers/NewRestauranteController';
import { ListRestauranteController } from '../controllers/ListRestauranteController';
import { DeleteRestauranteController } from '../controllers/DeleteRestauranteController';
import { UpdateRestauranteController } from '../controllers/UpdateRestauranteController';

import { ListAllProdutosController } from '../controllers/ListAllProdutosController';
import { NewProdutoController } from '../controllers/NewProdutoontroller';
import { UpdateProdutoController } from '../controllers/UpdateProdutoController';
import { DeleteProdutoController } from '../controllers/DeleteProdutoController';

const router = Router();

const listAllRestauranteController = new ListAllRestaurantesController();
const newRestauranteController = new NewRestauranteController();
const listRestauranteController = new ListRestauranteController();
const deleteRestauranteController = new DeleteRestauranteController();
const updateRestauranteController = new UpdateRestauranteController();

const listAllProdutosController = new ListAllProdutosController();
const newProdutoController = new NewProdutoController();
const updateProdutoController = new UpdateProdutoController();
const deleteProdutoController = new DeleteProdutoController();

router.get('/all-restaurantes', listAllRestauranteController.handle)
router.get('/restaurante/:id', listRestauranteController.handle)
router.get('/all-produtos', listAllProdutosController.handle)

router.post('/new-restaurante', newRestauranteController.handle)
router.post('/new-produto', newProdutoController.handle)

router.put('/update-restaurante', updateRestauranteController.handle)
router.put('/update-produto', updateProdutoController.handle)

router.delete('/delete-restaurante', deleteRestauranteController.handle)
router.delete('/delete-produto', deleteProdutoController.handle)

export { router }