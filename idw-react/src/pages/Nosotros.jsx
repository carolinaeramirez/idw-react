import "../styles/estilos.css";
import foto from "../assets/img/caro.jpeg";
import foto2 from "../assets/img/gise.jpeg";


const Sobre = () => {
    return (  
     <div>
            <div className= "seccion-nombre">
                <h3>Un poco de nuestra historia</h3>
            </div>
            <div className= "contenedor-nos">
                <div className= "contenedor-sobre-nos">
                <img src={foto} alt="" className="imagen-sobre-nos"/>
                <img src={foto2} alt="" className="imagen-sobre-nos"/>
            </div>
            <div className="contenedor-textos">
                <h3> Como comenzo...</h3>
                <p> Somos un par de amigas que hemos conformado nuestras hermosas familias perrunas. Grandes y pequeños, nuestros "perrijos" son parte fundamentales de nuestras familias, y cada vez que arrancan los planeamientos de las tan esperadas vacaciones, comenzaban nuestros problemas. Nunca nos ivamos tranquilas, nunca se disfrutan las vacaciones familiares al 100%, por qué?, porque hay miembros de nuestras familias que no estan con nosotros. Por lo que decidimos poner manos a la obra y buscarle una solución. Y vaya que la encontramos!</p>
                <h3> Nuestra idea, solución de muchos</h3>
                <p>Vacaciones en familia... y con familia perruna por supuesto que si! Buscamos hospedajes, traslados y todo lo necesario para poder disfrutar de nuestras tan merecidas vacaciones con los seres que día a día nos acompañan y alegran la vida. Juntos es mejor.</p>
            </div>
            </div>
     </div>
    )
}

export default Sobre;