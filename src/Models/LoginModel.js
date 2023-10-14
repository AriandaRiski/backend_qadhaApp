const db = require('../Config/dbConfig');

const getUsers = () => {
    try {
        const getUsers = db('user').select('*').orderBy('id', 'asc');
        return getUsers
    } catch (error) {
        console.log(error);
    }
}

const getTotal = () => {
    try {
        const total = db('user').count('* as total').first();
        return total;
    } catch (error) {
        console.log(error);
    }
}

const addUser = (data) => {
    try {
        const add  = db('user').insert(data);
        return add;
    } catch (error) {
        console.log(error);
    }
}

const cekId = (id) => {
    const cekId = db('user').select('*').where('id', id).first();
    return cekId;
}

const cekEmail = (email) => {
    const cekEmail = db('user').select('*').where('email', email).first();
    return cekEmail;
}

module.exports = {
    getUsers,
    getTotal,
    addUser,
    cekId,
    cekEmail
}