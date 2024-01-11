import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req,res)=>{

    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already existed")

        //Hash the password and create an user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`firstname`,`lastname`,`username`,`email`,`tel`,`priority`,`password`) VALUES (?)"
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.username,
            req.body.email,
            req.body.phone,
            req.body.priority,
            hash,
        ]

        db.query(q, [values], (err, data)=>{
            if(err) return res.json(err)
            if(data.length) return res.status(200).json("User has been created")
        })
    })
}

export const login = (req,res)=>{
    
}

export const logout = (req,res)=>{
    
}