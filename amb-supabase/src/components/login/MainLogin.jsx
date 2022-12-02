import React, {useContext, useEffect, useState} from 'react'
import {GeneralContext} from '../../context/GeneralContext';
import {useNavigate} from 'react-router-dom';

function Main() {
  const {login, validateUserActive} = useContext(GeneralContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [tipoInicio, setTipoInicio] = useState(false)
  const [sending, setSending] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(tipoInicio){
      const persona = {
        email
      }
      setSending(true)
      login(persona, "magicLink")
    } else{
      const persona = {
        email,
        password
      }
      setSending(true)
      login(persona, "correoPass")
    }
  }
  const handleEmail =(e)=>{
    const {value}=e.target
    setEmail(value)
  }
  const handlePassword =(e)=>{
    const {value}=e.target
    setPassword(value)
  }
  const handleTipoInicio=()=>{
    setTipoInicio(!tipoInicio)
    setPassword("")
  }

  const validate=async ()=>{
    const user = await validateUserActive()
    if(user==="noUser"){navigate("/login")}
    if(user==="noRegistro"){navigate("/registro")}
  }

  useEffect(() => {
    validate()
  }, [])

  return (
    <div className="container mt-4">
        <form className='d-flex justify-content-center mt-4' onSubmit={(e)=>handleSubmit(e)}>
          <div className='card col-xs-10 col-sm-10 col-md-6 text-center mt-4' style={{border:"none"}}>
            <div className="card-header" style={{background:"white-gray", border:"none"}}>
            <h2>Bienvenido al portal de trámites</h2>
            <h6>Si es tu primera vez en el portal: elige como quieres iniciar, si eliges iniciar con contraseña esta quedara guardada como tu contraseña, se te enviara un correo de validacion y completarás tu registro mas adelante, si eliges con Magic Link solo necesitaras tu correo y no necesitaras tener contraseña</h6>
            </div>
            <div className="card-body" style={{background:"white-gray", border:"none"}}>
              <div className="row g-3">
                {
                  tipoInicio ? (
                    <>
                    <p className='fw-bold'>Iniciar con Magic Link</p>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label htmlFor="inputName1" className="form-label">Correo</label>
                      <input type="email" className="form-control" required id="inputName1" onChange={(e)=>handleEmail(e)}/>
                    </div>
                    <p type="submit" className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={handleTipoInicio}>Iniciar con correo y contraseña</p>
                    </>
                  ): (
                    <>
                    <p className='fw-bold'>Iniciar con Correo y Contraseña</p>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <label htmlFor="inputName1" className="form-label">Correo</label>
                      <input type="email" className="form-control" required id="inputName1" onChange={(e)=>handleEmail(e)}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <label htmlFor="inputNumeroDoc1" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" required id="inputNumeroDoc1" onChange={(e)=>handlePassword(e)}/>
                    </div>
                    <p type="submit" className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}} onClick={handleTipoInicio}>Iniciar con Magic Link</p>
                    </>
                  )
                }
                {sending ? (
                  <button type="submit" className='btn btn-lg' disabled style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar</button>
                ) : (
                  <button type="submit" className='btn btn-lg' style={{backgroundColor: "#3366CC", color:"white"}}>Iniciar</button>
                )}
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Main