import estilos from './Desarrollador.module.css'
import imgPerfil from '../assets/perfil.jpg'

function Desarrollador() {

  // datos de perfil que paso al componente como props
  // los pongo aqui para tenerlos centralizados
  const datos = {
    nombre: "Sebastian Villalobos",
    carrera: "Ingenieria Civil Informatica",
    ciudad: "Talca, Chile",
    github: "https://github.com/mfs-Seba"
  }

  return (
    <main className={estilos.pagina}>
      <PerfilDev
        nombre={datos.nombre}
        carrera={datos.carrera}
        ciudad={datos.ciudad}
        github={datos.github}
      />
    </main>
  )
}

// componente interno que recibe las props
function PerfilDev({ nombre, carrera, ciudad, github }) {
  return (
    <div className={estilos.tarjetaPerfil}>
      <div className={estilos.foto}>
        <img src={imgPerfil} alt="Foto de perfil" />
      </div>
      <h2 className={estilos.nombre}>{nombre}</h2>
      <p className={estilos.dato}><strong>Carrera:</strong> {carrera}</p>
      <p className={estilos.dato}><strong>Ciudad:</strong> {ciudad}</p>
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className={estilos.botonGithub}
      >
        Ver GitHub
      </a>
    </div>
  )
}

export default Desarrollador
