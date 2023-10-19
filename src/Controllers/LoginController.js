const LoginModel = require('../Models/LoginModel');

const listUser = async (req, res) => {
    try {
        const list = await LoginModel.getUsers();
        const total = await LoginModel.getTotal()

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

const addUser = async (req, res) => {

    const data = {
        username: req.body.username,
        email: req.body.email,
    }

    try {

        const cek = await LoginModel.cekEmail(data.email);
        if (cek) {
            return res.json({ message: `user dengan email = ${data.email} sudah digunakan!` });
        }

        const addUser = await LoginModel.addUser(data);
        const getData = await LoginModel.cekId(addUser[0]);

        return res.status('201').json({
            success: true,
            message: `Berhasil menambahkan ${data.username} !`,
            data: getData
        });
    } catch (error) {
        console.log(error);
        res.status('500').json({ message: error })

    }
}

const userById = async (req, res) => {

    try {
        const userById = await LoginModel.cekEmail(req.body.email);

        return res.status('201').json({
            success: true,
            data: userById,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

module.exports = {
    listUser,
    addUser,
    userById
}