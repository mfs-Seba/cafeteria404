import estilos from './Tarjeta.module.css'

// recibo los datos del miembro por props
function Tarjeta({ nombre, cargo, descripcion }) {
  return (
    <div className={estilos.tarjeta}>
      <div className={estilos.foto}>
        <span>👤</span>
      </div>
      <h4 className={estilos.nombre}>{nombre}</h4>
      <p className={estilos.cargo}>{cargo}</p>
      <p className={estilos.descripcion}>{descripcion}</p>
    </div>
  )
}

export default Tarjeta
