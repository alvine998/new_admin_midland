import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [actived, setActived] = useState(0)
    const navigate = useNavigate()

    const getData = () => {
        axios.get(`http://localhost:3001/admins/list`).then(
            res => {
                const data = res.data;
                setActived(data.active)
            }
        )
    }

    useEffect(()=>{
        getData();
        if(actived == 0){
            navigate("/")
        }
    },[])
    return (
        <div>
            <p>Dashboard here</p>
        </div>
    );
}

export default Dashboard;