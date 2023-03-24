import mongoose from “mongoose”;

const clienteSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: Number, required: true},
    cpf: {type: Number},
    endereco: {type: String}
});

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;
