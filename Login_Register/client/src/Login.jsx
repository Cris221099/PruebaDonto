// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    axios.defaults.withCredentials = true;


    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data.Status === "Success") {


                    if (result.data.role === "admin") {

                        navigate('/dashboard')
                    } else {

                        navigate('/home')
                    }



                }

            }).catch(err => console.log(err))


        // Aquí puedes implementar la lógica para procesar el inicio de sesión
        // Puedes enviar los datos (nombre, correo, contrasena) a tu servidor para autenticación.
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2>Iniciar sesion</h2>
                <form onSubmit={handleSubmit}>

                    <label>
                        Correo Electrónico:
                        <input
                            type="email"

                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                    </label>
                    <br />
                    <label>
                        Contraseña:
                        <input
                            type="password"

                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
                    </label>
                    <br />
                    <button type="button" onClick={handleSubmit} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                        iniciar sesion
                    </button>
                </form>
                <p>

                    <br></br>
                    <Link to="/forgot-password">Forgot Password</Link>





                </p>


            </div>
        </div>
    );
}

export default Login;