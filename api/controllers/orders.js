import { Order, sequelize } from "../db.js";

export const getOrderFromDB = async (req, res) => {
    try {
        const data = await Order.findAll();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal Server Error')
    }
}