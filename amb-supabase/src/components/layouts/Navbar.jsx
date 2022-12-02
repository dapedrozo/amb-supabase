import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';

function Navbar() {
  const {signOutUser, userNickname, setUserNickname} = useContext(GeneralContext)

  const navigate = useNavigate()

  const goIndex= ()=>{
    navigate("/")
  }

  const logOut=async ()=>{
    await signOutUser()
    setUserNickname("")
    navigate("/login")
  }

  useEffect(() => {
  }, [])
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light ps-4 pe-4" style={{backgroundColor: "#3366CC"}}>
        <a href="https://www.gov.co/" target={"_blank"}>
          <img src="https://www.bucaramanga.gov.co/wp-content/uploads/2021/03/logo_gov_co-e1611810279980.png" alt="" />
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-end">
          <li className="nav-item" onClick={goIndex}>
            <a className="nav-link fw-bolder text-white" style={{cursor:"pointer"}}>Inicio</a>
          </li>
          {
            userNickname!=="" ? (
              <>
              <li className="nav-item">
                <a className="nav-link fw-bolder text-white">{userNickname}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bolder text-white" onClick={logOut} style={{cursor:"pointer"}}>Salir</a>
              </li>
              </>
            ) : (
              <div></div>
            )
          }
          
        </ul>
      </div>
  </nav>
  )
}

export default Navbar