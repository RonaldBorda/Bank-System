const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

const createTransaction = async (req, res) => {

    try {

        const { cuentaId, tipo, monto, descripcion } = req.body;

        const account = await Account.findById(cuentaId);

        if (!account) {
            return res.status(404).json({
                message: 'Cuenta no encontrada'
            });
        }

        const transaction = new Transaction({
            cuenta: cuentaId,
            tipo,
            monto,
            descripcion
        });

        await transaction.save();

        res.status(201).json({
            message: 'Movimiento registrado',
            transaction
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createTransaction
};