const mongoose = require('mongoose');

const VeiculoSchema =  new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    cor : String,
    combustivel : Boolean,
    ano_fabricacao : Number,
    ano_modelo : Number,
    placa : String,
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);