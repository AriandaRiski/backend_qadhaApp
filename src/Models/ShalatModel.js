const db = require('../Config/dbConfig');

const getShalat = () => {
    try {
        const getShalat = db('shalat').select('*').orderBy('tanggal_shalat', 'desc');
        return getShalat
    } catch (error) {
        console.log(error);
    }
}

const getTotal = () => {
    try {
        const total = db('shalat').count('* as total').first();
        return total;
    } catch (error) {
        console.log(error);
    }
}

const addShalat = (data) => {
    try {
        const add  = db('shalat').insert(data);
        return add;
    } catch (error) {
        console.log(error);
    }
}

const cekId = (id) => {
    console.log(id)
    const cekId = db('shalat').select('*').where('id', id).first();
    return cekId;
}


const hapus = (id) => {
    const hapus = db('shalat').where({ id: id }).del();
    return hapus;
}

const getShalatByUser = (user_id) => {
    try {
        const getShalatByUser = db('shalat').select('*').where('user_id', user_id).orderBy('tanggal_shalat', 'desc');
        return getShalatByUser
    } catch (error) {
        console.log(error);
    }
}

const getTotalByUser = (user_id) => {
    try {
        const total = db('shalat').where('user_id', user_id).count('* as total').first();
        return total;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getShalat,
    getTotal,
    addShalat,
    cekId,
    hapus,
    getShalatByUser,
    getTotalByUser
}