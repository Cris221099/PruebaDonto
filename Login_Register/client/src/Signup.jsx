import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

   

    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        
        navigate('/login')
        
        
        
        })
        .catch(err=> console.log(err))


        // Aquí puedes implementar la lógica para procesar el inicio de sesión
        // Puedes enviar los datos (nombre, correo, contrasena) a tu servidor para autenticación.
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2>Registrar</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                    </label>
                    <br />
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
                        Registrar
                    </button>
                </form>

                <p>¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
                {/* Agregar un botón "Login" adicional */}
                <Link to="/login" type="button"  style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                    Login
                </Link>

            </div>
        </div>
    );
}

export default Signup;
