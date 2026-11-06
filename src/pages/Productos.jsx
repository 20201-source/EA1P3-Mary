import Tarjeta from "../componentes/Tarjeta";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";
import { useState } from "react";

function Productos (){
    const [mostrar, setMostrar] = useState(false);

    function cerrarModal(){
        setMostrar(false)
    }

    function mostrarModal(){
        setMostrar(true)
    }
    return(
        <main>
            <h1>Producto</h1>

            <Tarjeta
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3qUm-ofr97xj_W9zmEGAjeZsRimjLD6hLQYjwIilbQ&s=10"
            titulo= "Hamburguesa"
            descripcion= "Hamburguesa clásica. Incluye papas y regrescos "
            >
            <Boton funcion={mostrarModal}>Pedirlo</Boton>

            </Tarjeta>

            <Tarjeta
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8WZxMHPx1pvd2Vg5aSJErzObxgTzC5mlOru_wlUayg&s=10"
            titulo= "Hamburguesa"
            descripcion= "Hamburguesa clásica con guacamole. Incluye papas y regrescos "
            >
            <Boton funcion={mostrarModal}>Pedirlo</Boton>

            </Tarjeta>

            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu pedido ha sido recibido</p>
                    <Boton funcion={cerrarModal}>Aceptar</Boton>

                </Modal>
            )}

        </main>
    )
}

export default Productos;