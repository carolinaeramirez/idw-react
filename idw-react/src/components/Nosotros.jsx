import "/styles/estilos.css";
import {Nav} from "./Nav";
import {Footer} from "./Footer";

const Sobre = () => {
    return (
        <main>
            <Nav/>
            <div className= "seccion-nombre">
                <h3>Un poco de nuestra historia</h3>
            </div>
            <div className= {styles.contenedor-nos}>
                <div className= {styles.contenedor-sobre-nos}>
                <img src={"../assets/img/caro.jpeg"} alt="" class={styles.imagen-sobre-nos}/>
                <img src={"../assets/img/gise.jpeg"} alt="" class={styles.imagen-sobre-nos}/>
            </div>
            <div class={styles.contenedor-textos}>
                <h3> Como comenzo...</h3>
                <p> Somos un par de amigas que hemos conformado nuestras hermosas familias perrunas. Grandes y pequeños, nuestros "perrijos" son parte fundamentales de nuestras familias, y cada vez que arrancan los planeamientos de las tan esperadas vacaciones, comenzaban nuestros problemas. Nunca nos ivamos tranquilas, nunca se disfrutan las vacaciones familiares al 100%, por qué?, porque hay miembros de nuestras familias que no estan con nosotros. Por lo que decidimos poner manos a la obra y buscarle una solución. Y vaya que la encontramos!</p>
                <h3> Nuestra idea, solución de muchos</h3>
                <p>Vacaciones en familia... y con familia perruna por supuesto que si! Buscamos hospedajes, traslados y todo lo necesario para poder disfrutar de nuestras tan merecidas vacaciones con los seres que día a día nos acompañan y alegran la vida. Juntos es mejor.</p>
            </div>
            </div>
            <Footer/>
        </main>   
    )
}