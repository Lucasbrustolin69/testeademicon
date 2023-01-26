const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const vendaSchema = new Schema({

   id: ObjectId,
   cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente' },
   vendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendedor' },
   valorDaCompra: Number,
   formaDePamento: String
}, {timestamps: true})

const vendaModel = mongoose.model('venda', vendaSchema)

module.exports = vendaModel