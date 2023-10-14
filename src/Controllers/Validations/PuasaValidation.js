const Joi = require('joi');

const validasiTambah = async (req, res, next) => {

    const schema = Joi.object({
        nama_puasa: Joi.string().min(3).max(30).required()
    });

    try {

        const { error } = await schema.validate({ nama_puasa: req.body.nama_puasa });

        if (error) {
            return res.json({ message: error.details[0].message })
        }

        next();

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validasiTambah
}