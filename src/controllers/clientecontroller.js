const clienteModel = require('../models/clientemodel')

class clienteController {
    async store(req, res){
        const createCliente = await clienteModel.create (req.body);
        return res.status(200).json(createCliente);
    }

    async index(req, res){
        const cliente = await clienteModel.find();
        return res.status(200).json(cliente);
    }
    async list_actives(req, res){
        const cliente = await clienteModel.find({ ativo: true }).select({ nome: true }).sort({nome:1});
        return res.status(200).json(cliente);
    }

    async show(req, res){
        const { id } = req.params;
        const cliente = await clienteModel.findById(id);

        if (!cliente) {
        return res.status(404).json({ message: "cliente não existe!"});}

        return res.status(200).json(cliente);
    }

    async update(req, res) {
        const { id } = req.params;

        await clienteModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: "cliente atualizado!"});
    }

    async destroy(req, res) {
        const { id } = req.params;
        
        const clienteDeleted = await clienteModel.findByIdAndDelete(id);
        return res.status(200).json({ message: "Cliente Excluido!"})
    }
}

module.exports = new clienteController()