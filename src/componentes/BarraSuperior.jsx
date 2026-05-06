import { Link } from 'react-router-dom'
import estilos from './BarraSuperior.module.css'

function BarraSuperior() {
  return (
    <header className={estilos.barra}>
      <div className={estilos.logo}>
        <span className={estilos.icono}>☕</span>
        <span className={estilos.nombre}>Cafeteria 404</span>
      </div>

      <div className={estilos.botones}>
        <button className={estilos.btnSecundario}>Ventas</button>
        <Link to="/" className={estilos.btnPrimario}>Comienza Ahora</Link>
      </div>
    </header>
  )
}

export default BarraSuperior
