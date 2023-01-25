const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const clienteSchema = new Schema({

   id: ObjectId,
   nome: String,
   cpf: Number,
   rg: Number,
   CEP: Number, //api correios
   endereço: String,
   vendedor: String
    
})

const clienteModel = mongoose.model('cliente', clienteSchema)

module.exports = clienteModel