import { Link } from 'react-router-dom'
import estilos from './NoEncontrado.module.css'

// esta pagina aparece cuando la ruta no existe
function NoEncontrado() {
  return (
    <main className={estilos.pagina}>
      <h1 className={estilos.titulo}>404</h1>
      <p className={estilos.texto}>
        Uy, esta pagina no existe... pero igual te invitamos un cafe ☕
      </p>
      <Link to="/" className={estilos.boton}>Volver al inicio</Link>
    </main>
  )
}

export default NoEncontrado
