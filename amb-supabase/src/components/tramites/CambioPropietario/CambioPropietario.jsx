import React, {useContext, useEffect, useState} from 'react'
import {GeneralContext} from '../../../context/GeneralContext';
import Fase1 from './Fase1'
import Fase2 from './Fase2'
import Fase3 from './Fase3'
import Fase4 from './Fase4'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'

function Main() {
  const { getCirculos, getDepartamentos, getTiposPredio, getCiudades, getInstrumentosCiudades, getInstrumentosNotarias, getInstrumentosInstrumento, getNaturalezasJuridicas, getEstados, getTiposDocumento, handleTramiteCambioPropietario} = useContext(GeneralContext)

  const navigate = useNavigate()

  const [stepForm, setStepForm] = useState(0)
  const [disabledButtons, setDisabledButtons] = useState(0)

  const [circulos, setCirculos] = useState("")
  const [departamentosView, setDepartamentosView] = useState([])
  const [tiposPredioView, setTiposPredioView] = useState([])
  const [ciudadesView, setCiudadesView] = useState([])

  const [instrumentosCiudadesView, setInstrumentosCiudadesView] = useState([])
  const [instrumentosNotariasView, setInstrumentosNotariasView] = useState([])
  const [instrumentosInstrumentosView, setInstrumentosInstrumentosView] = useState([])
  const [naturalezasJuridicasView, setNaturalezasJuridicasView] = useState([])
  const [estadosView, setEstadosView] = useState([])
  const [tiposDocumentoView, setTiposDocumentoView] = useState([])

  const [tramitePredio, setTramitePredio] = useState([
    { 
      matricula: "",
      circulo:"300",
      catastro:"AMB",
      departamentos:"",
      ciudads:"",
      direccionActual:"",
      TipoPredio:"",
    },
  ])
  const [tramiteNotaria, setTramiteNotaria] = useState([
    { 
      idRadicacion: "",
      fechaAnotacion:"",
      ciudadTramiteNotarial:"",
      notaria:"",
      nombreInstrumento:"",
      naturalezaJuridica:"",
      complemento:"",
      estadoProcesoNotarial:"",
      valorTransaccion:"",
    },
  ])
  const [personasDeList, setPersonasDeList] = useState([
    { 
      tipoDocumento: "Cedula",
      numeroDocumento:"",
      nombre1:"",
      nombre2:"",
      apellido1:"",
      apellido2:"",
      porcentaje:"100",
      aclaracion:"",
    },
  ]);
  const [personasAList, setPersonasAList] = useState([
    { 
      tipoDocumento: "Cedula",
      numeroDocumento:"",
      nombre1:"",
      nombre2:"",
      apellido1:"",
      apellido2:"",
      porcentaje:100,
      aclaracion:"",
    },
  ]);
  const [archivo, setArchivo] = useState([{},{}])

  const handleForm=async (numForm)=>{
    setStepForm(numForm)
  }

  const getCirculo = async (numeroCirculo)=>{
    const circulosGet = await getCirculos()
    setCirculos(circulosGet[numeroCirculo].id_circulo)
    const list = [...tramitePredio];
    list[0]["circulo"] = circulosGet[numeroCirculo].id_circulo;
    setTramitePredio(list);
  }
  const getDptos = async ()=>{
    const dptos = await getDepartamentos()
    setDepartamentosView(dptos)
    const list = [...tramitePredio];
    list[0]["departamentos"] = dptos[0].id_departamento;
    setTramitePredio(list);
  }
  const getCiudad = async ()=>{
    const ciudades = await getCiudades()
    setCiudadesView(ciudades)
    getCirculo(0)
    const list = [...tramitePredio];
    list[0]["ciudads"] = ciudades[0].id_ciudad_origen;
    setTramitePredio(list);
  }
  const getTiposPred = async ()=>{
    const tiposPred = await getTiposPredio()
    setTiposPredioView(tiposPred)
    const list = [...tramitePredio];
    list[0]["TipoPredio"] = tiposPred[0].id_tipo_predio;
    setTramitePredio(list);
  }
  const getInstruCiudades=async()=>{
    const instrumentosCiudad = await getInstrumentosCiudades()
    const uniqueCiudades = [...new Set(instrumentosCiudad.map((element)=>{return element.id_ciudad_origen}))]
    setInstrumentosCiudadesView(uniqueCiudades);
    const list = [...tramiteNotaria];
    list[0]["ciudadTramiteNotarial"] = uniqueCiudades[0];
    setTramiteNotaria(list);

    const notariasAnotacion = await getInstrumentosNotarias(uniqueCiudades[0])
    const uniqueNotarias = [...new Set(notariasAnotacion.map((element)=>{return element.id_oficina_origen}))]
    setInstrumentosNotariasView(uniqueNotarias);
    list[0]["notaria"] = uniqueNotarias[0];
    setTramiteNotaria(list);

    const instrumentoAnotacion = await getInstrumentosInstrumento(uniqueCiudades[0],uniqueNotarias[0])
    const uniqueInstrumentos = [...new Set(instrumentoAnotacion.map((element)=>{return {id_instrumento:element.id_instrumento, id_numero_instrumento:element.id_numero_instrumento}}))]
    setInstrumentosInstrumentosView(uniqueInstrumentos);
    list[0]["nombreInstrumento"] = uniqueInstrumentos[0].id_numero_instrumento;
    setTramiteNotaria(list);
  }
  const getNatuJuridicas=async()=>{
    const natJuridicas = await getNaturalezasJuridicas()
    setNaturalezasJuridicasView(natJuridicas)
    const list = [...tramiteNotaria];
    list[0]["naturalezaJuridica"] = natJuridicas[0].id_naturaleza_juridica;
    setTramiteNotaria(list);
  }
  const getEstadosAnotaciones=async()=>{
    const estadosAnotaciones = await getEstados()
    setEstadosView(estadosAnotaciones)
    const list = [...tramiteNotaria];
    list[0]["estadoProcesoNotarial"] = estadosAnotaciones[0].id_estado;
    setTramiteNotaria(list);
  }
  
  const handleTiposDocumento=async()=>{
    const tiposDocu = await getTiposDocumento()
    setTiposDocumentoView(tiposDocu)
  }

  const handleTramitePredioChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...tramitePredio];
    list[index][name] = value;
    if((name==="ciudads" && value==="Bucaramanga") || (name==="ciudads" && value==="Floridablanca") || (name==="ciudads" && value==="Giron")){
      list[index]["circulo"] = "300";
    } else{
      list[index]["circulo"] = "314";
    }
    setTramitePredio(list);
  };

  const handleTramiteNotariaChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...tramiteNotaria];
    list[index][name] = value;
    setTramiteNotaria(list);
  };

  const handlePropietarioDeAdd=async()=>{
    setPersonasDeList([...personasDeList, { 
      tipoDocumento: "Cedula",
      numeroDocumento:"",
      nombre1:"",
      nombre2:"",
      apellido1:"",
      apellido2:"",
      porcentaje:100,
      aclaracion:"",
    }]);
  }
  const handlePropietarioDeRemove = (index) => {
    const list = [...personasDeList];
    list.splice(index, 1);
    setPersonasDeList(list);
  };
  const handlePropietarioDeChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...personasDeList];
    list[index][name] = value;
    setPersonasDeList(list);
  };

  const handlePropietarioAAdd=async()=>{
    setPersonasAList([...personasAList, { 
      tipoDocumento: "Cedula",
      numeroDocumento:"",
      nombre1:"",
      nombre2:"",
      apellido1:"",
      apellido2:"",
      porcentaje:100,
      aclaracion:"",
    }]);
  }
  const handlePropietarioARemove = (index) => {
    const list = [...personasAList];
    list.splice(index, 1);
    setPersonasAList(list);
  };
  const handlePropietarioAChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...personasAList];
    list[index][name] = value;
    setPersonasAList(list);
  };

  const handleArchivoChange = (e, index) => {
    const { files } = e.target;
    const list = [...archivo];
    list[index] = files;
    setArchivo(list);
  };

  const handleSubmit =async()=>{
    setDisabledButtons(1)
    const predioObject = tramitePredio.map((ele)=>{
      return {id_matricula:ele.matricula,id_circulo:ele.circulo,id_departamento:ele.departamentos, direccion_actual:ele.direccionActual, id_tipo_predio:ele.TipoPredio, id_ciudad_origen:ele.ciudads}
    })
    const anotacionObject= tramiteNotaria.map((ele)=>{
      return {id_matricula:tramitePredio[0].matricula,id_radicacion:ele.idRadicacion,fecha_anotacion:ele.fechaAnotacion.replace("/","-"), id_ciudad_origen:ele.ciudadTramiteNotarial, id_oficina_origen:ele.notaria, id_numero_instrumento:ele.nombreInstrumento, id_naturaleza_juridica:ele.naturalezaJuridica, id_naturaleza_complemento: ele.id_naturaleza_complemento, id_estado:ele.estadoProcesoNotarial, valor:ele.valorTransaccion}
    })
    const personaDeAddPersonaObject=personasDeList.map((ele)=>{
      return {id_tipo_documento:ele.tipoDocumento, id_documento:ele.numeroDocumento, id_apellido1:ele.apellido1, id_apellido2:ele.apellido2, id_nombre_1:ele.nombre1, id_nombre_2:ele.nombre2}
    })
    const personaAAddPersonaObject=personasAList.map((ele)=>{
      return {id_tipo_documento:ele.tipoDocumento, id_documento:ele.numeroDocumento, id_apellido1:ele.apellido1, id_apellido2:ele.apellido2, id_nombre_1:ele.nombre1, id_nombre_2:ele.nombre2}
    })
    const personaDeObject = personasDeList.map((ele)=>{
      return {id_matricula:tramitePredio[0].matricula,id_radicacion:tramiteNotaria[0].idRadicacion,id_tipo_documento:ele.tipoDocumento, id_documento:ele.numeroDocumento, id_porcentaje:ele.porcentaje, id_aclaracion:ele.aclaracion}
    })
    const personaAObject = personasAList.map((ele)=>{
      return {id_matricula:tramitePredio[0].matricula,id_radicacion:tramiteNotaria[0].idRadicacion,id_tipo_documento:ele.tipoDocumento, id_documento:ele.numeroDocumento, id_porcentaje:ele.porcentaje, id_aclaracion:ele.aclaracion}
    })
    handleTramiteCambioPropietario(predioObject, anotacionObject, personaDeAddPersonaObject, personaAAddPersonaObject, personaDeObject, personaAObject, archivo)
  }

  useEffect(() => {
    handleForm(0)
    getDptos()
    getTiposPred()
    getCiudad()
    getInstruCiudades()
    getNatuJuridicas()
    getEstadosAnotaciones()
    handleTiposDocumento()
  }, [])

  return (
      <div className='container d-flex justify-content-center text-center mt-4 mb-4'>
      {
        stepForm===0 ? (
          <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8' style={{border:"none"}}>
              <div className="card-header" style={{background:"white-gray", border:"none"}}>
                <h2>Registra tu predio</h2>
                <div className="card-body" style={{background:"white-gray", border:"none"}}>
                {
                  tramitePredio.map((tramitPredio, index)=>(
                    <Fase1 tramitPredio={tramitPredio} index={index} handleTramitePredioChange={handleTramitePredioChange} departamentosView={departamentosView} ciudadesView={ciudadesView} tiposPredioView={tiposPredioView} handleForm={handleForm} key={index}/>
                ))}
                <div className="d-grid gap-3 mt-4">
                {
                  (tramitePredio[0].matricula==="") || (tramitePredio[0].direccionActual==="") ?
                  (
                    <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} disabled >Siguiente</button>
                  ) : (
                    <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>handleForm(1)}>Siguiente</button>
                  )
                }
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>navigate("/tramites")}>Volver</button>
                </div>
              </div>
            </div>
          </div>
        ) : stepForm===1 ? (
          <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8' style={{border:"none"}}>
              <div className="card-header" style={{background:"white-gray", border:"none"}}>
                <h2>Registra tus datos notariales</h2>
                <div className="card-body" style={{background:"white-gray", border:"none"}}>
                {
                  tramiteNotaria.map((tramitNotaria, index)=>(
                    <Fase2 tramitNotaria={tramitNotaria} index={index} handleTramiteNotariaChange={handleTramiteNotariaChange} instrumentosCiudadesView={instrumentosCiudadesView} instrumentosNotariasView={instrumentosNotariasView} instrumentosInstrumentosView={instrumentosInstrumentosView} naturalezasJuridicasView={naturalezasJuridicasView} estadosView={estadosView} handleForm={handleForm} key={index}/>
                    ))}
                <div className="d-grid gap-3 mt-4">
                {
                  (tramiteNotaria[0].idRadicacion==="") || (tramiteNotaria[0].fechaAnotacion==="") || (tramiteNotaria[0].valorTransaccion==="") ?
                  (
                    <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} disabled >Siguiente</button>
                  ) : (
                    <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>handleForm(2)}>Siguiente</button>
                  )
                }
                <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>handleForm(0)}>Volver</button>
                </div>
              </div>
            </div>
          </div>
        ) : stepForm===2 ? (
          <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8' style={{border:"none"}}>
            <div className="card-header" style={{background:"white-gray", border:"none"}}>
              <h2>Bienvenido al Tramite de Cambio de Propietario</h2>
              <h6>Registra los datos del propietario/os que cede el predio</h6>
              <div className="card-body" style={{background:"white-gray", border:"none"}}>
                  {
                    personasDeList.map((personaDe, index)=>(
                      <Fase3 personaDe={personaDe} personasDeList={personasDeList} index={index} tiposDocumentoView={tiposDocumentoView} handlePropietarioDeRemove={handlePropietarioDeRemove} handlePropietarioDeChange={handlePropietarioDeChange} key={index}/>
                    ))}
                    <button className='btn btn-primary btn-lg mt-2' onClick={handlePropietarioDeAdd}>añadir otro</button>
                    <div className="d-grid gap-3 mt-4">
                      {
                        (personasDeList[0].numeroDocumento==="") || (personasDeList[0].nombre1==="") || (personasDeList[0].apellido1==="") || (personasDeList[0].porcentaje==="") ?
                        (
                          <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} disabled >Siguiente</button>
                        ) : (
                          <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>handleForm(3)}>Siguiente</button>
                        )
                      }
                    <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>handleForm(1)}>Anterior</button>
                  </div>
              </div>
            </div>
          </div>
        ) : stepForm===3 ? (
          <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8' style={{border:"none"}}>
            <div className="card-header" style={{background:"white-gray", border:"none"}}>
              <h2>Bienvenido al Tramite de Cambio de Propietario</h2>
              <h6>Registra los datos del propietario/os que recibe el predio</h6>
              <div className="card-body" style={{background:"white-gray", border:"none"}}>
                {
                personasAList.map((personaA, index)=>(
                  <Fase4 personaA={personaA} personasAList={personasAList} index={index} tiposDocumentoView={tiposDocumentoView} handlePropietarioARemove={handlePropietarioARemove} handlePropietarioAChange={handlePropietarioAChange} key={index}/>
                ))
                }
                <button className='btn btn-primary btn-lg mt-2' onClick={handlePropietarioAAdd}>añadir otro</button>
                <div className="d-grid gap-3 mt-4">
                    {
                      (personasAList[0].numeroDocumento==="") || (personasAList[0].nombre1==="") || (personasAList[0].apellido1==="") || (personasAList[0].porcentaje==="") ?
                      (
                        <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} disabled >Siguiente</button>
                      ) : (
                        <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={()=>handleForm(4)}>Siguiente</button>
                      )
                    }
                  <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>handleForm(2)}>Anterior</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8' style={{border:"none"}}>
            <div className="card-header" style={{background:"white-gray", border:"none"}}>
              <h2>Bienvenido al Tramite de Cambio de Propietario</h2>
              <h6>Sube tu documentacion</h6>
              <div className="card-body" style={{background:"white-gray", border:"none"}}>
              {
              archivo.map((element, index)=>(
                <div key={index}>
                {
                  index===0 ?
                  (
                    <label className='form-label' htmlFor="inputGroupFile02">Sube aqui tu documento de identificacion</label>
                  ) : (
                    <label className='form-label' htmlFor="inputGroupFile02">Sube aqui tus documentos notariales estos pueden ser uno de los siguientes: Copia de la Escritura Pública, acto administrativo o sentencia Judicial debidamente registrada</label>
                  )
                }
                <div className="input-group mb-3" key={index}>
                  <input type="file" className="form-control" id="inputGroupFile02" name={'archivo'+index} onChange={(e)=>handleArchivoChange(e, index)}/>
                  <label className="input-group-text" htmlFor="inputGroupFile02">{
                    element.length >0 ? (
                    <AiOutlineCheckCircle className='text-success'/>                          
                    ) : (
                    <AiOutlineCloseCircle className='text-danger'/>
                    )
                  }</label>
                </div>
                </div>
              ))
              }
                <div className="d-grid gap-3 mt-4">
                  {
                    (Object.entries(archivo[0]).length === 0) || (Object.entries(archivo[1]).length === 0) ? (
                      <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  disabled>Guardar</button>
                    ) : disabledButtons === 0 ? (
                      <>
                      <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>handleSubmit()}>Guardar</button>
                      <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  onClick={()=>handleForm(3)}>Anterior</button>
                      </>
                    ) : (
                      <>
                      <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}  disabled >Guardar</button>
                      <button className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} disabled >Anterior</button>
                      </>
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Main