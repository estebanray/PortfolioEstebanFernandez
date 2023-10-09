import styles from './Habilidades.css'

const Habilidades = () => {
    return (
        <section className="style-habilidades" id='habilidades'>
            <hr className='style-linea'/>
            
            <h2>HABILIDADES</h2>

            <div className='style-cuadro-habilidades'>
                <div className='subtitulo-habilidades'>
                    <h3>PRINCIPALES</h3>
                </div>
                
                <img src="./html-5.png" alt="" className='icono-habilidades'/>
                <img src="./css-3.png" alt="" className='icono-habilidades'/>
                <img src="js.png" alt="" className='icono-habilidades'/>
                <img src="react.png" alt="" className='icono-habilidades'/>
            </div>

            <div className='style-cuadro-habilidades'>
                <div className='subtitulo-habilidades2'>
                    <h3>SECUNDARIOS</h3>
                </div>
                
                <img src="git.png" alt="" className='icono-habilidades2'/>
                <img src="python.webp" alt="" className='icono-habilidades2'/>
                <img src="github.png" alt="" className='icono-habilidades2'/>
                <img src="mysql.png" alt="" className='icono-habilidades2'/>
                <img src="bootstrap-logo.png" alt="" className='icono-habilidades2'/>
                <img src="types.webp" alt="" className='icono-habilidades2'/>

            </div>
            
        </section>
    )
}

export default Habilidades;