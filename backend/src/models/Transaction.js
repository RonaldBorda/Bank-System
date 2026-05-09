const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

    cuenta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },

    tipo: {
        type: String,
        enum: [
            'transferencia',
            'pago_servicio',
            'deposito'
        ],
        required: true
    },

    monto: {
        type: Number,
        required: true
    },

    descripcion: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);