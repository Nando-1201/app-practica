import React, {useState} from 'react'
const Cards2 = () => {
    const [celebridades, setcelebridades] = useState(null)
    const [error, seterror] = useState(false)
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=1")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error loading the Users api! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return ( 
                    
        <div className='position-sticky top-5 start-50 col-sm-6 col-md-4 col-lg-3'>
            <div className = "card">
        <img src={celebridades?.picture?.large} className="card-img-top"/>
        <div className="card-body text-center">
            <h5 className="card-title">{celebridades?.name?.last}</h5>
            <button className='btn btn-warning fs-5'
            onClick={getUsuarios}>
                Reload
            </button>
        </div>        
        </div>
        </div>
        
    
)
    
}

export default Cards2;