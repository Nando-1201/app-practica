import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Martinez"})
    }
    const logout = () => {
      setUser(null)
    }
    return(
        <nav className='navbar navbar-light bg-warning bg-gradient'>
            <div className='container-fluid'>
                <span className='navbar-brand mb-0 fs-4 text-white'>User:{user? user.nombre :"Desconocido"}</span>
                {user 
                    ? (<button 
                        className="btn btn-outline-info text-white" 
                        type="Button" 
                        onClick = {logout} >Cerrar Sesion
                    </button>)
                    : (<button 
                        className="btn btn-outline-info text-white" 
                        type="Button" 
                        onClick = {login} >Iniciar Sesion
                    </button>)
      }

            </div>
        </nav>
    )
}

export default Navbar
