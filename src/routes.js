const { Router } = require('express')

const vendedorController = require('./controllers/vendedorcontroller');
const clienteController = require('./controllers/clientecontroller');
const vendaController = require('./controllers/vendacontroller')

const routes = Router()

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor rodando..."  })
})

//rotas vendedor:

routes.post('/vendedor', vendedorController.store);
routes.get('/vendedor', vendedorController.index);
routes.get('/vendedor/trabalhando', vendedorController.list_actives);
routes.get('/vendedor/:id', vendedorController.show);
routes.put('/vendedor/:id', vendedorController.update);
routes.delete('/vendedor/:id', vendedorController.destroy);

//rotas cliente:

routes.post('/cliente', clienteController.store);
routes.get('/cliente', clienteController.index); 
routes.get('/cliente/:id', clienteController.show);
routes.put('/cliente/:id',clienteController.update);
routes.delete('/cliente/:id', clienteController.destroy);

//rotas vendas:

routes.post('/venda', vendaController.store);
routes.get('/venda', vendaController.index); 
routes.get('/venda/:id', vendaController.show);
routes.put('/venda/:id',vendaController.update);
routes.delete('/venda/:id', vendaController.destroy)


module.exports = routes
