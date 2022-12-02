import Index from '../components/index/Index';
import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {GeneralContext} from '../context/GeneralContext';


function IndexPage() {
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
    <Index/>
  )
}

export default IndexPage