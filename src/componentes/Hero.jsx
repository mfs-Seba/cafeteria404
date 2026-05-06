import estilos from './Hero.module.css'
import imgCafe from '../assets/cafe-grande.jpg'

function Hero() {
  return (
    <section className={estilos.hero}>
      
      <div className={estilos.imagen}>
        <img src={imgCafe} alt="Taza de cafe humeante" />
      </div>

      <div className={estilos.tarjeta}>
        <div className={estilos.encabezado}>
          <h2 className={estilos.titulo}>Conócenos</h2>
        </div>

        <p className={estilos.texto}>
          Bienvenidos a Cafeteria 404, el lugar donde tu error 
          de no haber tomado cafe en la mañana se soluciona.
        </p>
        <p className={estilos.texto}>
          Servimos cafe de especialidad, pasteleria casera y 
          un ambiente para conversar o trabajar tranquilo.
        </p>

        <button className={estilos.boton}>Comienza Ahora</button>
      </div>

    </section>
  )
}

export default Hero
