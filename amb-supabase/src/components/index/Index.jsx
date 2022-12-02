import React from 'react'
import {useNavigate} from 'react-router-dom';

function Index() {
  const navigate=useNavigate()

  return (
    <div className='container'>
        <div className="row mt-4 ps-4 pe-4 justify-content-around">
        <div className="card col-xs-12 col-sm-12 col-md-5 mt-4">
            <div className="card-body">
                <h3 className='text-center'>Realizar trámites</h3>
                <p className='mt-4'>Echa un vistazo a los tramites que tenemos, a continuacion podras elegir el tramite que desees realizar y listo</p>
                <div className="text-center">
                    <button className='btn btn-lg' onClick={()=>navigate("/tramites")} style={{backgroundColor: "#3366CC", color:"white"}}>Ir a Tramites</button>
                </div>

               
            </div>
        </div>
        <div className="card col-xs-12 col-sm-12 col-md-5 mt-4">
            <div className="card-body">
                <h3 className='text-center'>Ver mis trámites</h3>
                <p className='mt-4'>Echa un vistazo a los tramites que has realizado, a continuacion podras ver el estado del mismo y toda la informacion del mismo</p>
                <div className="text-center">
                    <button className='btn btn-primary btn-lg' onClick={()=>navigate("/mis-tramites")} style={{backgroundColor: "#3366CC", color:"white"}}>Ver Tramites</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Index