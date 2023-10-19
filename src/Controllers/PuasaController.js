const PuasaModel = require('../Models/PuasaModel');
const { DateTime } = require("luxon");
const dt = DateTime.now();

const listPuasa = async (req, res) => {
    try {
        const list = await PuasaModel.getPuasa();
        const total = await PuasaModel.getTotal()

        return res.status('200').json({
            success: true,
            data: list,
            total: total.total
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

const tambah = async (req, res) => {

    const data = {
        nama_puasa: req.body.nama_puasa,
        // tanggal_puasa: dt.toLocaleString(), 
        tanggal_puasa: dt.toFormat('yyyy-MM-dd H:m:s'),
        user_id: req.body.user_id
    }

    try {
        const tambahPuasa = await PuasaModel.addPuasa(data);
        const getData = await PuasaModel.cekId(tambahPuasa[0]);

        return res.status('201').json({
            success: true,
            message: `Berhasil menambahkan ${data.nama_puasa} !`,
            data: getData
        });
    } catch (error) {
        console.log(error);
        res.status('500').json({ message: error })

    }
}

const update = async (req, res) => {

    const id = req.params.id;
    const nama_puasa = req.body.nama_puasa;

    try {

        const cek = await PuasaModel.cekId(id);

        if (!cek) {
            return res.json({ message: `data dengan id = ${id} tidak ditemukan!` })
        }

        const update = await PuasaModel.update(id, nama_puasa)

        return res.status(201).json({
            success: true,
            message: "Puasa Berhasil di Update!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
    }
}

const hapus = async (req, res) => {

    const id = req.params.id;

    try {

        const cek = await PuasaModel.cekId(id);
        if (!cek) {
            return res.json({ message: `data dengan id = ${id} tidak ditemukan!` });
        }

        const hapus = await PuasaModel.hapus(id);

        return res.status(201).json({
            success: true,
            message: "Puasa berhasil dihapus!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

const listPuasaByUser = async (req, res) => {
    try {
        const list = await PuasaModel.getPuasaByUser(req.body.user_id);
        const total = await PuasaModel.getTotalByUser(req.body.user_id)

        return res.status('200').json({
            success: true,
            data: list,
            total: total.total
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}


module.exports = {
    listPuasa,
    tambah,
    update,
    hapus,
    listPuasaByUser
}