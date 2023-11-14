// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react';

import axios from 'axios'
import {useNavigate} from "react-router-dom";


export function ForgotPassword() {

    const [email, setEmail] = useState('');
    
    const navigate = useNavigate()

   

    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/forgot-password', { email})
        .then(result => {
            if(result.data === "Success"){
        
        navigate('/login')
        
            }
        
        })
        .catch(err=> console.log(err))


        // Aquí puedes implementar la lógica para procesar el inicio de sesión
        // Puedes enviar los datos (nombre, correo, contrasena) a tu servidor para autenticación.
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                   
                    <label>
                        Correo Electrónico:
                        <input
                            type="email"
                            
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                    </label>
                    <br />
                   
                    <br />
                    <button type="button" onClick={handleSubmit} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                        Submit
                    </button>
                </form>
                 
                

            </div>
        </div>
    );
}

export default ForgotPassword;