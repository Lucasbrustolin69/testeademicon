const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const vendedorSchema = new Schema({

//listar por ordem alfabetica

   id: ObjectId,
   nome: String,
   contratado: Date,
   comissao: Number,
   jornada: {
        entrada: Number,
        saida: Number
    },
    ativo:Boolean
})



const vendedorModel = mongoose.model('vendedor', vendedorSchema)

module.exports = vendedorModel