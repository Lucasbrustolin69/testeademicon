const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const clienteSchema = new Schema({

   id: ObjectId,
   vendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendedor' },
   nome: String,
   cpf: Number,
   rg: Number,
   CEP: Number, 
   endereço: String,
   ativo: Boolean
    
}, {timestamps: true})

const clienteModel = mongoose.model('cliente', clienteSchema)

module.exports = clienteModel