import React, {useContext, useEffect} from 'react'
import VerTramitesMain from '../components/tramites/VerTramitesPersona/VerTramitesMain'
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../context/GeneralContext';

function VerTramites() {
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
    <VerTramitesMain/>
  )
}

export default VerTramites