import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';

function Login() {

    const[correo, setCorreo] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    function iniciarSesion(evento){
        evento.preventDefault();

        setCorreo("");
        setPassword("");

        navigate("/");
    }

    return(
        <main className='login'>

            <div className='login-contenedor'>
                <div className='login-pestanas'>
                    <button className='activo' onClick={() => navigate("/login")}>Iniciar sesión</button>
                    <button onClick={() => navigate("/registro")}>Registrar</button>
                </div>

                <div className='login-formulario'>
                    <h2>Bienvenido</h2>
                    <p>Inicia sesión con tu cuenta</p>

                    <form onSubmit={iniciarSesion}>
                        <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(evento) => setCorreo(evento.target.value)}
                        required
                        />

                        <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(evento) => setPassword(evento.target.value)}
                        required
                        />

                        <button type="submit">Iniciar sesión</button>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Login;