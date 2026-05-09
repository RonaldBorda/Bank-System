const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    cuenta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },

    servicio: {
        type: String,
        enum: [
            'luz',
            'agua',
            'internet',
            'telefonia',
            'universidad',
            'tarjeta_credito',
            'recarga_movil'
        ],
        required: true
    },

    monto: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);