import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import './style.css'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [actived, setActived] = useState('true')
    const navigate = useNavigate()

    const onLogin = () => {
        if(!username){
            swal("Username tidak boleh kosong", {icon:"warning"})
        }
        else if(!password){
            swal("Password tidak boleh kosong", {icon:"warning"}) 
        } else if(password.length < 8){
            swal("Password tidak boleh kurang dari 8 karakter", {icon:"warning"}) 
        } else {
            const result = {
                username: username,
                password: password,
                actived: actived
            }
            axios.post(`http://localhost:3001/admins/login`, result).then(
                res => {
                    console.log(res.data)
                    swal("Selamat datang kembali admin",{icon:"success"})
                    navigate("/dashboard")
                }
            )
            .catch(err => {
                console.log(err)
                swal("Username atau password salah!",{icon:"error"})
            })
        }
    }
    return (
        <div>
            <div className='box-login'>
                <h2 style={{textAlign:"center", color:"green"}}>Midland Properti<br/>Login</h2>
                <div style={{paddingTop:20}}>
                    <input type={"text"} value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" className='form-control'/>
                </div>
                <div style={{paddingTop:20}}>
                    <input type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" className='form-control'/>
                </div>
                <div style={{paddingTop:20}}>
                    <button className='btn btn-outline-primary w-100' onClick={onLogin}>Masuk</button>
                </div>
            </div>
        </div>
    );
}

export default Login;