import React from 'react'
import {useNavigate} from 'react-router-dom';

function TramitesMain() {
  const navigate=useNavigate()
  return (
    <div className='container'>
        <div className="row mt-4 ps-4 pe-4 justify-content-around">
        <div className="card col-xs-12 col-sm-12 col-md-5 mt-4">
            <div className="card-body">
                <h3 className='text-center'>Realizar trámite de Cambio de Propietario</h3>
                <p className='mt-4'>Echa un vistazo al trámite de cambio de propietario, aquí podrás presentar toda la documentación notarial de tu trámite y quedará registrado inmediatamente, a continuación será revisado en el menor tiempo posible por uno de nuestros funcionarios y se aprobará tu trámite en el Área Metropolitana de Bucaramanga</p>
                <p>Ten en cuenta que este trámite se realiza cuando tú eres el dueño del predio y quieres venderlo a otra persona o entidad</p>
                <div className="text-center">
                    <button className='btn btn-lg' onClick={()=>navigate("/tramites/cambio-propietario")} style={{backgroundColor: "#3366CC", color:"white"}}>Ir a Cambio de Propietario</button>
                </div>

               
            </div>
        </div>
        <div className="card col-xs-12 col-sm-12 col-md-5 mt-4">
            <div className="card-body">
                <h3 className='text-center'>Realizar trámite de Cambio de Poseedor</h3>
                <p className='mt-4'>Echa un vistazo al trámite de cambio de poseedor, aquí podrás presentar toda la documentación notarial de tu trámite y quedará registrado inmediatamente, a continuación será revisado en el menor tiempo posible por uno de nuestros funcionarios y se aprobará tu trámite en el Área Metropolitana de Bucaramanga</p>
                <p>Ten en cuenta que este trámite se realiza cuando tú eres el dueño de un inmueble que está en un predio que pertenece a otra persona y quieres venderlo este inmueble a otra persona o entidad</p>
                <div className="text-center">
                    <button className='btn btn-primary btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}>Ir a Cambio de Poseedor</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TramitesMain