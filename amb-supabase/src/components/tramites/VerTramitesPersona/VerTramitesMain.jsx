import React, {useContext, useEffect, useState} from 'react'
import {MdEditOff, MdEdit} from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {GeneralContext} from '../../../context/GeneralContext';

function VerTramitesMain() {
  const { getAnotacionesPersona, getPredioPersona, getAnotacionPersona, getPersonaDePersona, getPersonaAPersona, getPathDocumento } = useContext(GeneralContext)

  const [anotacionesView, setAnotacionesView] = useState([])
  const [predioView, setPredioView] = useState([])
  const [personaDeView, setPersonaDeView] = useState([])
  const [personaAView, setPersonaAView] = useState([])
  const [anotacionView, setAnotacionView] = useState([])

  const getAnotacionesView = async ()=>{
    const result = await getAnotacionesPersona()
    setAnotacionesView(result)
  }
  const getPredioView = async(id_matricula)=>{
    const result = await getPredioPersona(id_matricula)
    setPredioView(result)
  }
  const getAnotacionView = async(id_radicacion)=>{
    const result = await getAnotacionPersona(id_radicacion)
    setAnotacionView(result)
  }
  const getPersonaDeView = async(id_radicacion)=>{
    const result = await getPersonaDePersona(id_radicacion)
    setPersonaDeView(result)
  }
  const getPersonaAView = async(id_radicacion)=>{
    const result = await getPersonaAPersona(id_radicacion)
    setPersonaAView(result)
  }
  const getAllView=async(id_matricula, id_radicacion)=>{
    await getPredioView(id_matricula)
    await getAnotacionView(id_radicacion)
    await getPersonaDeView(id_radicacion)
    await getPersonaAView(id_radicacion)
  }
  const handleVerDocumento=async(id_matricula, id_radicacion, nombre)=>{
    const url = await getPathDocumento(id_matricula, id_radicacion, nombre)
    window.open(url.signedUrl, '_blank').focus();
  }


  useEffect(() => {
    getAnotacionesView()
  }, [])
  

  return (
    <div className='d-flex justify-content-center text-center mt-4 mb-4'>
      <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10' style={{border:"none"}}>
      <div className="card-header" style={{background:"white-gray", border:"none"}}>
        <h2>Mis tramites</h2>
        <div className="table-responsive">
      <table className="table caption-top table-hover">
      <caption>
      </caption>
        <thead>
          <tr>
            <th scope="col"># Radicacion</th>
            <th scope="col">Matricula</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Notaria</th>
            <th scope="col">Estado de Revision</th>
            <th scope="col">Observaciones</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            anotacionesView.map((element, index)=>(
            <tr className='text-center' key={index}>
              <td className='text-truncate'>{element.id_radicacion}</td>
              <td className='text-truncate'>{element.id_matricula}</td>
              <td className='text-truncate'>{element.id_ciudad_origen}</td>
              <td className='text-truncate'>{element.id_oficina_origen}</td>
              <td className='text-truncate'>{element.id_nombre_estado}</td>
              <td className='text-truncate'>{
              element.observaciones===null ? "no hay observaciones" : element.observaciones
              }</td>
              <td>
              <div className="d-grid gap-2 d-xxl-block">
                <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>getAllView(element.id_matricula, element.id_radicacion, index)}><AiOutlineEye/> info.
                </button>
                {
                  element.id_nombre_estado==="Rechazado" ? (
                    <button className="btn btn-primary me-2" type="button"><MdEdit/></button>
                  ) : (
                    <button className="btn btn-primary me-2" type="button"><MdEditOff/></button>
                  )
                }
              </div>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
        </div>
      </div>


<div className="modal fade" id="staticBackdrop"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card-body" style={{background:"white-gray", border:"none"}}>
              <div className="row">
                <div className="col">
                    <div className="card card-body text-start">
                      <div className="row">
                        <div className="col">
                        <h2>Datos Registrados del Predio</h2>
                            {
                              predioView.map((elemento, index)=>(
                                <div key={index}>
                                  <p>Numero de Matricula: {elemento.id_matricula}</p>
                                  <p>Numero de Circulo: {elemento.id_circulo}</p>
                                  <p>Departamento: {elemento.departamentos.nombre_departamento}</p>
                                  <p>Ciudad: {elemento.id_ciudad_origen}</p>
                                  <p>Direccion del Predio: {elemento.direccion_actual}</p>
                                  <p>Tipo de Predio: {elemento.id_tipo_predio}</p>
                                </div>
                              ))
                            }
                        </div>
                        <div className="col">
                        <h2>Datos Registrados de la Anotacion</h2>
                        {
                          anotacionView.map((elemento, index)=>(
                            <div key={index}>
                              <p>Id de la radicacion: {elemento.id_radicacion}</p>
                              <p>Fecha de la anotacion: {elemento.fecha_anotacion}</p>
                              <p>Ciudad donde se realizo el tramite: {elemento.id_ciudad_origen}</p>
                              <p>Oficina donde se realizo el tramite: {elemento.id_oficina_origen}</p>
                              <p>Instrumento: {elemento.instrumentos_especificos.id_instrumento}</p>
                              <p>Naturaleza Juridica: {elemento.id_naturaleza_juridica}</p>
                              <p>Complemento: {
                                elemento.id_naturaleza_complemento===null ? "No hay complemento" : elemento.id_naturaleza_complemento
                              }</p>
                              <p>Estado: {elemento.id_estado}</p>
                              <p>Valor de la transaccion: {elemento.valor}</p>
                              <p>Estado de revision en el AMB: {elemento.id_nombre_estado}</p>
                              <p>Observaciones del AMB: {elemento.observaciones}
                              {
                                elemento.observaciones===null ? "No hay Observaciones" : elemento.observaciones
                              }
                              </p>
                            </div>
                          ))
                        }
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h2>Datos Registrados de 
                          {
                          personaDeView.length===1 ? " las personas que ceden el predio" : " la persona que ceden el predio"
                          } 
                        </h2>
                        {
                          personaDeView.map((elemento, index)=>(
                            <div key={index}>
                              <p>Primer nombre: {elemento.persona.id_nombre_1}</p>
                              <p>Segundo nombre: {elemento.persona.id_nombre_2}</p>
                              <p>Primer apellido: {elemento.persona.id_apellido1}</p>
                              <p>Segundo apellido: {elemento.persona.id_apellido2}</p>
                              <p>Tipo de Documento: {elemento.id_tipo_documento}</p>
                              <p>Numero de Documento: {elemento.id_documento}</p>
                              <p>Porcentaje de propiedad del predio: {elemento.id_porcentaje} %</p>
                              <p>Aclaracion: {
                                elemento.id_aclaracion==="" ? "No hay aclaracion" : elemento.id_naturaleza_complemento
                              }</p>
                            </div>
                          ))
                        }
                        </div>
                        <div className="col">
                        <h2>Datos Registrados de 
                            {
                            personaAView.length===1 ? " las personas que reciben el predio" : " la persona que recibe el predio"
                            } 
                        </h2>
                          {
                            personaAView.map((elemento, index)=>(
                              <div key={index}>
                                <p>Primer nombre: {elemento.persona.id_nombre_1}</p>
                                <p>Segundo nombre: {elemento.persona.id_nombre_2}</p>
                                <p>Primer apellido: {elemento.persona.id_apellido1}</p>
                                <p>Segundo apellido: {elemento.persona.id_apellido2}</p>
                                <p>Tipo de Documento: {elemento.id_tipo_documento}</p>
                                <p>Numero de Documento: {elemento.id_documento}</p>
                                <p>Porcentaje de propiedad del predio: {elemento.id_porcentaje} %</p>
                                <p>Aclaracion: {
                                  elemento.id_aclaracion==="" ? "No hay aclaracion" : elemento.id_naturaleza_complemento
                                }</p>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <div className="d-grid gap-2 col-6 mx-auto">
                            <button onClick={()=>handleVerDocumento(predioView[0].id_matricula, anotacionView[0].id_radicacion, "documentacionNotarial")} className="btn btn-primary" type="button"><AiOutlineEye/> Documento Idenficacion</button>
                            <button onClick={()=>handleVerDocumento(predioView[0].id_matricula, anotacionView[0].id_radicacion, "documentoIdentificacion")} className="btn btn-primary" type="button"><AiOutlineEye/> Documento notarial</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
</div>
    
  </div>
</div>
  )
}

export default VerTramitesMain