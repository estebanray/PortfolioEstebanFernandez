import styles from './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className='style-header' id='inicio'>

            <nav className='style-nav'>
                <ul>
                    {/* <li><Link to='/Portafolio-Esteban-Fernandez/' className='style-link'>INICIO</Link></li>
                    <li><Link to='/Portafolio-Esteban-Fernandez/sobremi' className='style-link'>SOBRE MI</Link></li>
                    <li><Link to='/Portafolio-Esteban-Fernandez/proyectos' className='style-link'>PROYECTOS</Link></li>
                    <li><Link to='/Portafolio-Esteban-Fernandez/habilidades'  className='style-link'>HABILIDADES</Link></li>
                    <li><Link to='/Portafolio-Esteban-Fernandez/contacto' className='style-link'>CONTACTO</Link></li> */}
                    <li><Link to='/Portafolio-Esteban-Fernandez/' className='style-link'>INICIO</Link></li>
                    <li><a href="#sobremi" className='style-link'>SOBRE MI</a></li>
                    <li><a href="#habilidades" className='style-link'>HABILIDADES</a></li>
                    <li><a href="#proyectos" className='style-link'>PROYECTOS</a></li>
                    <li><a href="#contacto" className='style-link'>CONTACTO</a></li>
                </ul>
                
                <div className='style-inicio-banner'>
                    
                    <div className='style-inicio-bienvenida'>
                        <h2>¡BIENVENIDO A MI PORTFOLIO!</h2>
                    </div>

                    <h2 className='style-titulo-nombre'>DESARROLLADOR WEB FULL STACK JUNIOR</h2>

                    <img src="./perfil.png" alt="perfil" className='img-perfil' />


                    <img src="./public/banner.png" alt="banner" className='img-banner' />

                    <h1 className='style-nombre'>ESTEBAN FERNÁNDEZ</h1>

                    
                    
                </div>



                
                
                
                
            </nav>
        </header>
    )
}

export default Navbar;

