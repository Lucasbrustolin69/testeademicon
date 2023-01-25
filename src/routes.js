const { Router } = require('express')

const vendedorController = require('./controllers/vendedorcontroller')

const routes = Router()

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Server ta bala..."  })
})

routes.post('/vendedor', vendedorController.store);
routes.get('/vendedor', vendedorController.index);
routes.get('/vendedor/:id', vendedorController.show);
routes.put('/vendedor/:id', vendedorController.update);
routes.delete('/vendedor/:id', vendedorController.destroy)

module.exports = routes
