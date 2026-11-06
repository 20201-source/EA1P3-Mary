import "./Tarjeta.css"

function Tarjeta({imagen, titulo, descripcion, children}){
    return(
        <div className="tarjeta">
            <img 
            className= "imagenTarjeta"
            src={imagen}
            alt={titulo}
            />

            <h2 className="tituloTarjeta">{titulo}</h2>
            <p className="descripcionTarjeta">{descripcion}</p>
            {children}
            
        </div>
    )
}

export default Tarjeta;