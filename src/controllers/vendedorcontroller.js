
const vendedorModel = require('../models/vendedormodel')

class vendedorController {
    async store(req, res){
        const createVendedor = await vendedorModel.create (req.body);
        return res.status(200).json(createVendedor);
    }

    async index(req, res){
        const vendedor = await vendedorModel.find();
        return res.status(200).json(vendedor);
    }

    async show(req, res){
        const { id } = req.params;
        const vendedor = await vendedorModel.findById(id);

        if (!vendedor) {
        return res.status(404).json({ message: "vendedor não existe!"});}

        return res.status(200).json(vendedor);
    }

    async update(req, res) {
        const { id } = req.params;

        await vendedorModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: "Vendedor atualizado!"});
    }

    async destroy(req, res) {
        const { id } = req.params;
        

        const vendedorDeleted = await vendedorModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Vendedor Excluido!"});
    }
}

module.exports = new vendedorController()