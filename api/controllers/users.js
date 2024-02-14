import { User, sequelize } from "../db.js";

export const getUserFromDB = async (req, res) => {
    try {
        const data = await User.findAll();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
}

export const updateUser = async (req, res) => {

    //CHECK EXISTING USER
    const data = await User.findAll({ where: {
        username: req.body.username,
    }});

    if (data.length === 0 || (data.length === 1 && data[0].user_id === req.body.user_id)) {
        await User.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            tel: req.body.tel,
        }, {
            where: {user_id: req.body.user_id}
        })
        .then(() => {
            return res.status(201).json("User has been updated")
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        if (req.body.priority === "admin") {
            return res.status(409).json("Admin already existed")
        } else {
            return res.status(409).json("User already existed")
        }
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: { user_id: req.body.user_id }
        });

        return res.status(201).json("User has been deleted")
    } catch(err) {
        console.log(err);
    }
}