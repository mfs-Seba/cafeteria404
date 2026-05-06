import { useState, useEffect } from 'react'
import estilos from './Slide.module.css'

// este componente hace un slide automatico cambiando frases cada cierto tiempo
function Slide() {

  // listas de frases para mostrar
  const frases = [
    "El mejor cafe de Talca",
    "Pasteleria casera todos los dias",
    "Wifi gratis para tus largas tardes de estudio"
  ]

  const [actual, setActual] = useState(0)

  // este efecto cambia la frase cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((anterior) => (anterior + 1) % frases.length)
    }, 3000)
    
    // limpio el intervalo al desmontar
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.slide}>
        {frases.map((frase, indice) => (
          <p
            key={indice}
            className={`${estilos.frase} ${indice === actual ? estilos.activa : ''}`}
          >
            {frase}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Slide
