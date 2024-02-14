import { sequelize, User } from "../db.js"
import jwt from "jsonwebtoken";

export const register = async (req,res) => {

    function unID() {
        return Math.floor(Math.random() * Date.now()).toString(16).slice(-10)
    }

    //CHECK EXISTING USER
    const data = await User.findOne({ where: {
        username: req.body.username
    }});

    if (data === null) {
        try {
            const newUser = User.build({
                user_id: unID(),
                firstname: req.body.firstname, 
                lastname: req.body.lastname, 
                username: req.body.username, 
                email: req.body.email, 
                tel: req.body.tel, 
                priority: req.body.priority, 
                password: req.body.password,
                avatar: req.body.avatar
            });

            await newUser.save();

            return res.status(201).json("User has been created")     
        } 
        catch(err) {
            console.log(err);
        }
    } else {
        if (req.body.priority === "admin") {
            return res.status(409).json("Admin already existed")
        } else {
            return res.status(409).json("User already existed")
        }
    }
}

export const login = async (req,res) => {
    const data = await User.findOne({ where: {
        username: req.body.username
    }});

    if (data === null) { return res.status(404).json("User not found!") }
    else {
        if (data.password !== req.body.password) {
            return res.status(400).json("Wrong password!")
        }

        console.log(data);

        const token = jwt.sign({user_id: data.user_id}, "jwtkey")
        const {password, ...other} = data

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    }
}

export const logout = (req,res) => {
    
    res.clearCookie("access_token", {
        samSite:"none",
        secure:true
    }).status(200).json("User has been logged out.")
}