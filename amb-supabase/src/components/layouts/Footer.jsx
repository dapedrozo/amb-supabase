import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()

  const reload = () =>{
    navigate(0)
  }

  const colorIcons = {
    color: "#004484"
  }
  return (
    <div className="pt-4" style={{backgroundColor: "#004884"}}>
      <div className="container rounded-3" style={{backgroundColor: "white"}}>
        <div className="container p-4">
            <div className="row align-items-center">
                <div className="col-10 fw-bold">
                  <h4 style={colorIcons}>
                    Area Metropolitana de Bucaramanga - AMB.
                  </h4>
                </div>
                <div className="col-2">
                  <img
                    onClick={reload}
                    className="img-fluid"
                    src="https://www.amb.gov.co/wp-content/uploads/LOGO-AMB-e1546037965120.png"
                    alt="AMB"
                    style={{cursor:"pointer"}}
                  />
                </div>
                <div className="col-12">
                  <ul style={{listStyle: "none", padding: "0px"}}>
                    <li>
                      <strong>Dirección:</strong>  Calle 89 Transversal Oriental Metropolitana 69 Centro de Convenciones Neomundo Piso 1, Bucaramanga, Santander, Colombia
                    </li>
                    <li>
                      <strong>Código Postal:</strong> 680003
                    </li>
                    <li>
                      <strong>Horario de Atención:</strong> lunes a viernes: 8:00 am a 12:00 m y de 1:00 pm a 3:00 pm
                    </li>
                    <li>
                      <strong>Teléfono:</strong> 00+60+7 + 6444831.
                    </li>
                    <li>
                      <strong>Email Información:</strong> info@amb.gov.co
                    </li>
                    <li>
                      <strong>Notificaciones Judiciales:</strong> notificaciones.judiciales@amb.gov.co
                    </li>
                  </ul>  
                </div>
            </div>
        </div>
        <div className="container pb-4">
            <div className="row align-items-center">
                <div className="col-4">
                    <a href="https://www.facebook.com/AreaMetropolitanadeBucaramanga" style={{textDecoration:"none"}}>
                      <FaFacebookF className='me-1' style={colorIcons}/>
                        Siguenos en Facebook
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://twitter.com/AreaMetroBga" style={{textDecoration:"none"}}>
                        <FaTwitter className='me-1' style={colorIcons}/>
                        Siguenos en Twitter
                    </a>
                </div>
                <div className="col-4">
                    <a href="https://www.instagram.com/areametropolitanadebucaramanga/" style={{textDecoration:"none"}}>
                        <FaInstagram className='me-1' style={colorIcons}/>
                        Siguenos en Instagram
                    </a> 
                </div>
            </div>
        </div>
      </div>
      <br/>
</div>
  )
}

export default Footer