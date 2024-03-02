import {Router} from 'express';
import { ListCartinhasController } from './controllers/Cartinha/ListCartinhasController';
import { CreateCartinhaController } from './controllers/Cartinha/CreateCartinhaController';
import { CreatePedidoController } from './controllers/Pedido/CreatePedidoController';
import { ListPedidoController } from './controllers/Pedido/ListPedidoController';
import { ListPapaiNoelController } from './controllers/PapaiNoel/ListPapaiNoelController';
import { CreatePapaiNoelController } from './controllers/PapaiNoel/CreatePapaiNoelController';
import { ListRotaController } from './controllers/Rota/ListRotaController';
import { CreateRotaController } from './controllers/Rota/CreateRotaController';
import { CreatePedidoStatusController } from './controllers/StatusPedido/CreatePedidoConcedidoController';
import { ListPedidoByStatusController } from './controllers/Pedido/ListPedidoByStatusController';

export const router = Router();

router.get('/cartinhas', new ListCartinhasController().handler);

router.post('/cartinhas/create', new CreateCartinhaController().handler);

router.get('/pedidos', new ListPedidoController().handler);

router.post('/pedidos/create', new CreatePedidoController().handler);

router.get('/pedidos/status', new ListPedidoByStatusController().handler)

router.get('/papainoel', new ListPapaiNoelController().handler);

router.post('/papainoel/create', new CreatePapaiNoelController().handler);

router.get('/rota', new ListRotaController().handler);

router.post('/rota/create', new CreateRotaController().handler);

router.post('/statusdopedido', new CreatePedidoStatusController().handler)