import Hero from '../componentes/Hero'
import Propuesta from '../componentes/Propuesta'
import Slide from '../componentes/Slide'
import Tarjeta from '../componentes/Tarjeta'
import { equipo } from '../data/datos'
import estilos from './Inicio.module.css'

function Inicio() {
  return (
    <main className={estilos.contenido}>

      <Hero />

      {/* aca va el componente con animacion de slide */}
      <Slide />

      {/* este recibe datos por props */}
      <Propuesta
        titulo="Cafe de origen"
        descripcion="Trabajamos con productores locales y de Sudamerica para traerte cafe fresco, tostado de manera artesanal cada semana."
        estrellas={4}
      />

      <section className={estilos.equipo}>
        <h3 className={estilos.tituloEquipo}>Nuestro equipo</h3>
        <div className={estilos.tarjetas}>
          {equipo.map((persona) => (
            <Tarjeta
              key={persona.id}
              nombre={persona.nombre}
              cargo={persona.cargo}
              descripcion={persona.descripcion}
            />
          ))}
        </div>
      </section>

    </main>
  )
}

export default Inicio
