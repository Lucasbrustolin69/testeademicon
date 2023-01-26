
const vendedorModel = require('../models/vendedormodel')
const vendaModel = require('../models/vendamodel')

class vendedorController {
    async store(req, res){
        const createVendedor = await vendedorModel.create (req.body);
        return res.status(200).json(createVendedor);
    }

    async index(req, res){
        const vendedor = await vendedorModel.find();
        return res.status(200).json(vendedor);
    }

    async list_actives(req, res){
        const vendedor = await vendedorModel.find({ ativo: true }).select({ nome: true, jornada: true }).sort({nome:1});
        const data_agora = new Date();
        const hora = data_agora.getHours();
        const trabalhando = vendedor.filter(i => (hora >= i.jornada.entrada) && (hora <= i.jornada.saida))
        return res.status(200).json(trabalhando);
    }

    async show(req, res){
        const { id } = req.params;
        const vendedor = await vendedorModel.findById(id);
        if (!vendedor) return res.status(404).json({ message: "vendedor não existe!"});

        const vendas = await vendaModel.find({ vendedor: vendedor._id });//possivel aggregate aqui
        // .aggregate([
        //     {
        //       $sort:{createdAt }
        //     },
        //     {
        //       $group: {
        //         _id: { x : "$x" },
        //         y: { $first : "$y" }
        //       }
        //     }
        //   ]) todo
        const resumo = { vendedor, vendas };
        

        return res.status(200).json(resumo);
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