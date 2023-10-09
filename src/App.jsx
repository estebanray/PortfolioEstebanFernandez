import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SobreMi from './components/SobreMi/SobreMi'
import Proyectos from './components/Proyectos/Proyectos'
import Habilidades from './components/Habilidades/Habilidades'
import Contacto from './components/Contacto/Contacto'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routes>
      <Route path='/Portafolio-Esteban-Fernandez/' element={<Navbar />}/>
      <Route path='/Portafolio-Esteban-Fernandez/sobremi' element={<SobreMi />}/>
      <Route path='/Portafolio-Esteban-Fernandez/proyectos' element={<Proyectos />}/>
      <Route path='/Portafolio-Esteban-Fernandez/habilidades' element={<Habilidades />}/>
      <Route path='/Portafolio-Esteban-Fernandez/contacto' element={<Contacto />}/>
    </Routes> EN UN PRINCIPIO IBA A UTILIZAR RUTAS*/}
    <Navbar />
    <SobreMi />
    <Habilidades />
    <Proyectos /> 
    <Contacto />
    </>
  )
}

export default App
