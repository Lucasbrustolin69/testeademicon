const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const vendaSchema = new Schema({

   id: ObjectId,
   cliente: String,
   vendedor: String,
   dataDaCompra: Date,
   valorDaCompra: Number,
   formaDePamento: String
})

const vendaModel = mongoose.model('venda', vendaSchema)

module.exports = vendaModel