import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin_Orders = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('order/');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="">
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th className="table-head">order_id</th>
                        <th className="table-head">user</th>
                        <th className="table-head">total</th>
                        <th className="table-head">date</th>
                        <th className="table-head">status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr className="table-body-element" key={item.order_id}>
                            <th>{item.order_id}</th>
                            <th>{item.user_id}</th>
                            <th>{item.total}</th>
                            <th>{item.created_at}</th>
                            <th>{item.status}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin_Orders