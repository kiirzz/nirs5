import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin_Revenue = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('order/');
            setData(result.data);
        };
        fetchData();
    }, []);

    let total = 0

    return (
        <div className="">
            <h2>Revenue</h2>
            <p className="">{                
                data.map(item => (               
                    total = total + item.total
                ))}
            </p>
        </div>
    )
}

export default Admin_Revenue    