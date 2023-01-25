const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const vendedorSchema = new Schema({
    id: ObjectId,
    nome: String,
    contratado: String,
    comissao: String,
   entrada: String,
   saida: String
})

const vendedorModel = mongoose.model('vendedor', vendedorSchema)

module.exports = vendedorModel