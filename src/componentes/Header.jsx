import { Link } from "react-router";
import "./Header.css";

function Header(){
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/preguntas'>Preguntas</Link>
                <Link to='/producto'>Producto</Link>

            </nav>
        </header>
    )
}

export default Header;