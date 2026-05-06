import estilos from './Propuesta.module.css'
import imgGranos from '../assets/granos.jpg'

// este componente recibe datos por props (titulo, descripcion, estrellas)
function Propuesta({ titulo, descripcion, estrellas }) {

  // creo un array para pintar las estrellas segun el numero
  const listaEstrellas = []
  for (let i = 0; i < estrellas; i++) {
    listaEstrellas.push("⭐")
  }

  return (
    <section className={estilos.propuesta}>

      <div className={estilos.texto}>
        <h3 className={estilos.titulo}>{titulo}</h3>
        <p className={estilos.descripcion}>{descripcion}</p>
        <div className={estilos.estrellas}>
          {listaEstrellas.map((est, indice) => (
            <span key={indice} className={estilos.estrella}>{est}</span>
          ))}
        </div>
      </div>

      <div className={estilos.imagen}>
        <img src={imgGranos} alt="Granos de cafe" />
      </div>

    </section>
  )
}

export default Propuesta
