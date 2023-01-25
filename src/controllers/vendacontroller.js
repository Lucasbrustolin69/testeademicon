const vendaModel = require('../models/vendamodel')

class vendaController {
    async store(req, res){
        const createVenda = await vendaModel.create (req.body);
        return res.status(200).json(createVenda);
    }

    async index(req, res){
        const venda = await vendaModel.find();
        return res.status(200).json(venda);
    }

    async show(req, res){
        const { id } = req.params;
        const venda = await vendaModel.findById(id);

        if (!venda) {
        return res.status(404).json({ message: "Essa venda não existe!"});}

        return res.status(200).json(venda);
    }

    async update(req, res) {
        const { id } = req.params;

        await vendaModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: "Venda atualizada!"});
    }

    async destroy(req, res) {
        const { id } = req.params;
        
        const vendaDeleted = await vendaModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Venda Excluida!"})
    }
}

module.exports = new vendaController()