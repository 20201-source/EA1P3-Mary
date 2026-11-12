import { Link } from "react-router";
import {UserRound} from "lucide-react";
import "./Header.css";

function Header(){
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/preguntas'>Preguntas</Link>
                <Link to='/producto'>Producto</Link>
                <Link to='/login'><UserRound size={25}/></Link>

            </nav>
        </header>
    )
}

export default Header;