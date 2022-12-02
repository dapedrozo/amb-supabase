import React, {useContext, useEffect, useState} from 'react'
import {GeneralContext} from '../../context/GeneralContext';
import {useNavigate} from 'react-router-dom';

function MainSignUp() {
  const navigate = useNavigate()
  const {getTiposDocumento, validateUserActive, signOutUser, registerPersonaGeneral} = useContext(GeneralContext)

  const [primerNombre, setPrimerNombre] = useState("")
  const [segundoNombre, setSegundoNombre] = useState("")
  const [primerApellido, setPrimerApellido] = useState("")
  const [segundoApellido, setSegundoApellido] = useState("")
  const [tipoDocumento, setTipoDocumento] = useState("")
  const [numeroDocumento, setNumeroDocumento] = useState("")
  const [tiposDocumentoView, setTiposDocumentoView] = useState([])
  

  const getDocumentos = async () =>{
    const response = await getTiposDocumento()
    setTiposDocumentoView(response)
    setTipoDocumento(response[0].id_tipo_documento)
  }

  const handleSubmit =async (e) =>{
    e.preventDefault()
    const persona = {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      tipoDocumento,
      numeroDocumento
    }
    await registerPersonaGeneral(persona)
    navigate("/")
  }

  const handlePrimerNombre =(e)=>{
    const {value}=e.target
    setPrimerNombre(value)
  }
  const handleSegundoNombre =(e)=>{
    const {value}=e.target
    setSegundoNombre(value)
  }
  const handlePrimerApellido =(e)=>{
    const {value}=e.target
    setPrimerApellido(value)
  }
  const handleSegundoApellido =(e)=>{
    const {value}=e.target
    setSegundoApellido(value)
  }
  const handleTipoDocumento =(e)=>{
    const {value}=e.target
    setTipoDocumento(value)
  }
  const handleNumeroDocumento =(e)=>{
    const {value}=e.target
    setNumeroDocumento(value)
  }

  const logOut = async () =>{
    await signOutUser()
    navigate("/login")
  }


  const validate=async ()=>{
    const user = await validateUserActive()
    if(user==="noUser"){navigate("/login")}
    if(user!=="noRegistro"){navigate("/")}
  }

  useEffect(() => {
    getDocumentos()
    validate()
  }, [])

  return (
    <div>
      <div className="container mt-4 mb-4">
      <form className='row justify-content-center' onSubmit={(e)=>handleSubmit(e)}>
        <div className='card col-xs-10 col-sm-10 col-md-8  text-center' style={{border:"none"}}>
          <div className="card-header" style={{background:"white-gray", border:"none"}}>
          <h2>Parece que no estas registrado</h2>
          <h5>No te preocupes completar tu registro es facil y rapido</h5>
          </div>
          <div className="card-body" style={{background:"white-gray", border:"none"}}>
            <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputName1" className="form-label">Primer Nombre</label>
                  <input type="text" className="form-control" required id="inputName1" onChange={(e)=>handlePrimerNombre(e)}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputName2" className="form-label">Segundo Nombre</label>
                  <input type="text" className="form-control" id="inputName2" onChange={(e)=>handleSegundoNombre(e)}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputApellidos1" className="form-label">Primer Apellido</label>
                  <input type="text" className="form-control" required id="inputApellidos1" onChange={(e)=>handlePrimerApellido(e)}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputApellidos2" className="form-label">Segundo Apellido</label>
                  <input type="text" className="form-control" id="inputApellidos2" onChange={(e)=>handleSegundoApellido(e)}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputTipoDoc1" className="form-label">Tipo de Documento</label>
                  <select id="inputTipoDoc1" className='form-select' onChange={(e)=>handleTipoDocumento(e)}>
                    {tiposDocumentoView.map((elemento)=>(
                      <option key={elemento.id_tipo_documento} value={elemento.id_tipo_documento}>{elemento.id_tipo_documento}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputNumeroDoc1" className="form-label">Numero de Documento</label>
                  <input type="text" className="form-control" required id="inputNumeroDoc1" onChange={(e)=>handleNumeroDocumento(e)}/>
                </div>
                  <button type="submit" className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}>Registrarme</button>
                  <p className='btn btn-lg btn-danger' onClick={logOut}>Cancelar</p>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default MainSignUp