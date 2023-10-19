const db = require('../Config/dbConfig');

const getPuasa = () => {
    try {
        const getPuasa = db('puasa').select('*').orderBy('tanggal_puasa', 'desc');
        return getPuasa
    } catch (error) {
        console.log(error);
    }
}

const getTotal = () => {
    try {
        const total = db('puasa').count('* as total').first();
        return total;
    } catch (error) {
        console.log(error);
    }
}

const addPuasa = (data) => {
    try {
        const add  = db('puasa').insert(data);
        return add;
    } catch (error) {
        console.log(error);
    }
}

const cekId = (id) => {
    console.log(id)
    const cekId = db('puasa').select('*').where('id', id).first();
    return cekId;
}

const update = (id, nama_puasa) => {
    const update = db('puasa').where({ id: id }).update({ nama_puasa : nama_puasa })
    return update;
}

const hapus = (id) => {
    const hapus = db('puasa').where({ id: id }).del();
    return hapus;
}

const getPuasaByUser = (user_id) => {
    try {
        const getPuasa = db('puasa').select('*').where('user_id', user_id).orderBy('tanggal_puasa', 'desc');
        return getPuasa
    } catch (error) {
        console.log(error);
    }
}

const getTotalByUser = (user_id) => {
    try {
        const total = db('puasa').where('user_id', user_id).count('* as total').first();
        return total;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPuasa,
    getTotal,
    addPuasa,
    cekId,
    update,
    hapus,
    getPuasaByUser,
    getTotalByUser
}