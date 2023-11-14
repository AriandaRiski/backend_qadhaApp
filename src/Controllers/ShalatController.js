const ShalatModel = require('../Models/ShalatModel');
const { DateTime } = require("luxon");
const dt = DateTime.now();

const listShalat = async (req, res) => {
    try {
        const list = await ShalatModel.getShalat();
        const total = await ShalatModel.getTotal()

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
        shubuh: req.body.shubuh,
        zuhur: req.body.zuhur,
        ashar: req.body.ashar,
        maghrib: req.body.maghrib,
        isya: req.body.isya,
        tanggal_shalat: dt.toFormat('yyyy-MM-dd H:m:s'),
        user_id: req.body.user_id
    }

    try {
        const addShalat = await ShalatModel.addShalat(data);
        const getData = await ShalatModel.cekId(addShalat[0]);

        return res.status('201').json({
            success: true,
            message: `Berhasil menambahkan data !`,
            data: getData
        });
    } catch (error) {
        console.log(error);
        res.status('500').json({ message: error })

    }
}

const hapus = async (req, res) => {

    const id = req.params.id;

    try {

        const cek = await ShalatModel.cekId(id);
        if (!cek) {
            return res.json({ message: `data dengan id = ${id} tidak ditemukan!` });
        }

        const hapus = await ShalatModel.hapus(id);

        return res.status(201).json({
            success: true,
            message: "Data Qadha Shalat berhasil dihapus!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

const listShalatByUser = async (req, res) => {
    try {
        const list = await ShalatModel.getShalatByUser(req.body.user_id);
        const total = await ShalatModel.getTotalByUser(req.body.user_id)

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
    listShalat,
    tambah,
    hapus,
    listShalatByUser
}