import React, {useContext, useEffect} from 'react'
import TramitesMain from '../components/tramites/DashboardTramites/TramitesMain';
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../context/GeneralContext';

function DashboardTramites() {
  const {validateUserActive} = useContext(GeneralContext)
  const navigate = useNavigate()

  const validate=async ()=>{
    const user = await validateUserActive()
    if(user==="noUser"){navigate("/login")}
    if(user==="noRegistro"){navigate("/registro")}
  }

  useEffect(() => {
    validate()
  }, [validate])

  return (
    <TramitesMain/>
  )
}

export default DashboardTramites