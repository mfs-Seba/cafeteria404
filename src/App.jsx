import { Routes, Route } from 'react-router-dom'
import BarraSuperior from './componentes/BarraSuperior'
import PiePagina from './componentes/PiePagina'
import Inicio from './paginas/Inicio'
import Desarrollador from './paginas/Desarrollador'
import NoEncontrado from './paginas/NoEncontrado'

function App() {

  return (
    <>
      <BarraSuperior />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/desarrollador" element={<Desarrollador />} />
        {/* si la ruta no existe, mostramos esto */}
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
      <PiePagina />
    </>
  )
}

export default App
