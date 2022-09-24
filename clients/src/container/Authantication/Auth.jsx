import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const Auth = () => {
    const navigate = useNavigate();
    const UserAuth = async () => {
        try {
            const url = 'http://localhost:3000/user/data';
            const res = await axios.get(url, {
                header: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            if (res.status !== 200) {
                console.log("page not found")
            }

        } catch (e) {
            console.log(e)
            navigate('/login')
        }
    }

    useEffect(() => {
        UserAuth()
    }, []);

    return (
        <div className="">
            <Outlet />
        </div>

    )
}

export default Auth