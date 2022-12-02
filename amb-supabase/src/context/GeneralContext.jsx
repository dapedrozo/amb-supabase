import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

export const GeneralContext = createContext();

export function GeneralContextProvider(props) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [userNickname, setUserNickname] = useState("")

  async function errorHandler(error){
    if (error.message == "Password should be at least 6 characters") {
      return MySwal.fire({
        title: <strong>Error!</strong>,
        html: (
          <i>
            La contraseña debe tener al menos 6 caracteres
          </i>
        ),
        icon: "error",
      });
    }
    else {
      console.log(error);
      return MySwal.fire({
        title: <strong>Error!</strong>,
        html: (
          <i>Ocurrió un error inesperado, intentalo de nuevo en un momento</i>
        ),
        icon: "error",
      });
    }
  }

  async function getTiposDocumento(){
    try {
      let { data: tipos_documento, error } = await supabase
      .from('tipos_documento')
      .select('*')
      if(error) throw error
      return tipos_documento
    } catch (error) {
      await errorHandler(error)
    }
  }

  async function verifyUser(id){
    try {
      let { data: personaGeneralPerfil, error } = await supabase.from('personaGeneralPerfil').select().eq('id',id)
      if(error) throw error
      return personaGeneralPerfil
    } catch (error) {
      await errorHandler(error)
    }
  }

  async function validateUserActive(){
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error
      if(data.session===null){return "noUser"}
      const user = await verifyUser(data.session.user.id)
      if(user.length===0){return "noRegistro"}
      setUserNickname(user[0].nombre1)
      return user;
    } catch (error) {
      await errorHandler(error)
    }
  } 

  async function getSession(){
    try {
      const { data, error } = await supabase.auth.getSession()
      if(error)throw error 
      return data     
    } catch (error) {
      await errorHandler(error)
    }
  }

  async function registerPersonaGeneral(persona){
    try {
      const dataSession = await getSession()
      const { data, error } = await supabase
      .from('personaGeneralPerfil')
      .insert([
        { id:dataSession.session.user.id, nombre1: persona.primerNombre, nombre2: persona.segundoNombre, apellido1:persona.primerApellido, apellido2:persona.segundoApellido, tipoDocumento: persona.tipoDocumento, numeroDocumento: persona.numeroDocumento }
      ])
      if(error)throw error 
      return "ok"
    } catch (error) {
      await errorHandler(error)
    }
  }

  async function login(user, tipoLogin){
    try {
      if(tipoLogin==="magicLink"){
        const { data, error } = await supabase.auth.signInWithOtp({
          email: user.email,
        })
        if(error) throw error
        return MySwal.fire({
          title: <strong>Listo!</strong>,
          html: (
            <i>
              Hemos enviado un correo con tu informacion de inicio por favor revisa tu correo
            </i>
          ),
          icon: "success",
        });
      } else{
        const { data, error } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: user.password,
        })
        if(error){
          if(error.message==="Invalid login credentials"){
            const { data, error } = await supabase.auth.signUp({
              email: user.email,
              password: user.password,
            })
            if(error)throw error
            return MySwal.fire({
              title: <strong>Listo!</strong>,
              html: (
                <i>
                  Hemos enviado un correo con tu informacion de inicio por favor revisa tu correo
                </i>
              ),
              icon: "success",
            });
          }else{
            throw error
          }
        }
        return window.location.reload()
      }  
    } catch (error) {
      await errorHandler(error)
    }
    
  }

  async function signOutUser(){
    try {
      const { error } = await supabase.auth.signOut()
      if(error) throw error
    } catch (error) {
      await errorHandler(error)
    }
  }


  async function getCirculos(){
    try {
      let { data: circulos, error } = await supabase
      .from('circulos')
      .select('*')
      if(error) throw error
      return circulos
    } catch (error) {
      await errorHandler(error)
    }
    
  }
  async function getDepartamentos(){
    try {
      let { data: departamentos, error } = await supabase
        .from('departamentos')
        .select('*')
      if(error) throw error
      return departamentos
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getTiposPredio(){
    try {
      let { data: tipos_predio, error } = await supabase
        .from('tipos_predio')
        .select('*')
      if(error) throw error
      return tipos_predio
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getCiudades(){
    try {
      let { data: ciudades, error } = await supabase
        .from('ciudades')
        .select('*')
      if(error) throw error
      return ciudades
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getInstrumentosCiudades(){
    try {
      let { data: instrumentos_ciudades, error } = await supabase
        .from('instrumentos_especificos')
        .select('id_ciudad_origen')
      if(error)throw error
      return instrumentos_ciudades
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getInstrumentosNotarias(ciudad){
    try {
      let { data: instrumentos_especificos, error } = await supabase
        .from('instrumentos_especificos')
        .select('id_oficina_origen')
        .eq('id_ciudad_origen',ciudad)
      if(error)throw error
      return instrumentos_especificos
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getInstrumentosInstrumento(ciudad, notaria){
    try {
      let { data: instrumentos_especificos, error } = await supabase
        .from('instrumentos_especificos')
        .select('id_instrumento, id_numero_instrumento')
        .eq('id_ciudad_origen',ciudad)
        .eq('id_oficina_origen',notaria)
      if(error)throw error
      return instrumentos_especificos
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getNaturalezasJuridicas(){
    try {
      let { data: naturalezas_juridicas, error } = await supabase
        .from('naturalezas_juridicas')
        .select('*')
      if(error)throw error
      return naturalezas_juridicas
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getEstados(){
    try {
      let { data: estados, error } = await supabase
        .from('estados')
        .select('*')
      if(error) throw error
      return estados
    } catch (error) {
      await errorHandler(error)
    }
  }

  async function savePredios(predio){
    try {
      const { data, error } = await supabase
        .from('predios')
        .upsert([
          predio,
        ])
      if(error)throw error
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function saveAnotaciones(anotacion){
    try {
      const { data, error } = await supabase
        .from('anotaciones')
        .insert([
          anotacion,
        ])
      if(error)throw error
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function savePersonaDe(personaDe){
    try {
      const { data, error } = await supabase
        .from('persona_de')
        .insert(personaDe)
      if(error)throw error
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function savePersonaA(personaA){
    try {
      const { data, error } = await supabase
        .from('persona_a')
        .insert(personaA)
      if(error)throw error
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function saveDocumentosAnotacion(documentoAnotacion){
    try {
      const { data, error } = await supabase
        .from('documentos_anotacion')
        .insert([
          documentoAnotacion,
        ])
        if(error)throw error
    } catch (error) {
      throw error
    }  
  }
  async function saveArchivos(matricula,idRadicacion,archivo){
    try {
      const { data, error } = await supabase
        .storage
        .from('documentacion-tramites')
        .upload(`${matricula}/${idRadicacion}/documentoIdentificacion.pdf`, archivo[0][0], {
          cacheControl: '3600',
          upsert: true
        })
      if(error)throw error
      const newDocumentoIdentificacionAnotacion = {
        id_matricula:matricula,
        id_radicacion:idRadicacion,
        bucket_id:"documentacion-tramites",
        name:`${matricula}/${idRadicacion}/documentoIdentificacion.pdf`
      }
      await saveDocumentosAnotacion(newDocumentoIdentificacionAnotacion)
    } catch (error) {
      await errorHandler(error)
    }
    try {
      const { data, error } = await supabase
        .storage
        .from('documentacion-tramites')
        .upload(`${matricula}/${idRadicacion}/documentacionNotarial.pdf`, archivo[1][0], {
          cacheControl: '3600',
          upsert: true
        })
      if(error)throw error
      const newDocumentoNotarialAnotacion = {
        id_matricula:matricula,
        id_radicacion:idRadicacion,
        bucket_id:"documentacion-tramites",
        name:`${matricula}/${idRadicacion}/documentacionNotarial.pdf`
      }
      await saveDocumentosAnotacion(newDocumentoNotarialAnotacion)
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function savePersonas(personaArray){
    try {
      const { data, error } = await supabase
      .from('persona')
      .upsert(personaArray)
      if(error)throw error
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function handleTramiteCambioPropietario(predioObject, anotacionObject, personaDeAddPersonaObject, personaAAddPersonaObject, personaDeObject, personaAObject, archivo){
    let timerInterval
    const respuesta1 = await MySwal.fire({
      icon: "success",
      title: 'Guardando...',
      html: 'Espere por favor...',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    await savePredios(predioObject[0])
    const user = await validateUserActive()
    anotacionObject[0].id_persona_general_perfil = user[0].id
    anotacionObject[0].id_nombre_estado = "No Revisado"
    await saveAnotaciones(anotacionObject[0])
    await savePersonas(personaDeAddPersonaObject)
    await savePersonaDe(personaDeObject)
    await savePersonas(personaAAddPersonaObject)
    await savePersonaA(personaAObject)
    await saveArchivos(predioObject[0].id_matricula,anotacionObject[0].id_radicacion,archivo)  
    const respuesta = await MySwal.fire({
      icon: "success",
      title: 'Su informacion ha sido guardada satisfactoriamente',
      html: 'A continuación será redirigido a la vista de su registro.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    navigate("/mis-tramites")
  }

  async function getAnotacionesPersona(){
    try {
      const user = await validateUserActive()
      let { data: anotaciones, error } = await supabase
        .from('anotaciones')
        .select(`id_radicacion,id_matricula, fecha_anotacion, id_ciudad_origen, id_oficina_origen, id_naturaleza_juridica, id_naturaleza_complemento, id_estado, valor, id_nombre_estado, observaciones, created_at,instrumentos_especificos(id_instrumento)
        `)
        .eq('id_persona_general_perfil',user[0].id)
        .order('created_at', { ascending: false })
      if(error)throw error
      return anotaciones
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getPredioPersona(id_matricula){
    try {
      let { data: predios, error } = await supabase
      .from('predios')
      .select(`id_matricula,id_circulo, direccion_actual, id_tipo_predio, id_ciudad_origen,
      departamentos(nombre_departamento)
      `)
      .eq('id_matricula',id_matricula)
      if(error)throw error
      return predios
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getAnotacionPersona(id_radicacion){
    try {
      let { data: predios, error } = await supabase
      .from('anotaciones')
      .select(`id_radicacion,id_matricula, fecha_anotacion, id_ciudad_origen, id_oficina_origen, id_naturaleza_juridica, id_naturaleza_complemento, id_estado, valor, id_nombre_estado, observaciones,
      instrumentos_especificos(id_instrumento)
      `)
      .eq('id_radicacion',id_radicacion)
      if(error)throw error
      return predios
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getPersonaDePersona(id_radicacion){
    try {
      let { data: persona_de, error } = await supabase
        .from('persona_de')
        .select(`id_tipo_documento,id_documento, id_porcentaje, id_aclaracion,persona(id_nombre_1, id_nombre_2, id_apellido1, id_apellido2)
        `)
        .eq('id_radicacion',id_radicacion)
      if(error)throw error
      return persona_de
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getPersonaAPersona(id_radicacion){
    try {
      let { data: persona_a, error } = await supabase
        .from('persona_a')
        .select(`id_tipo_documento,id_documento, id_porcentaje, id_aclaracion,persona(id_nombre_1, id_nombre_2, id_apellido1, id_apellido2)
        `)
        .eq('id_radicacion',id_radicacion)
      if(error)throw error
      return persona_a
    } catch (error) {
      await errorHandler(error)
    }
  }
  async function getPathDocumento(id_matricula, id_radicacion, nombre){
    try {
      const { data, error } = await supabase
        .storage
        .from('documentacion-tramites')
        .createSignedUrl(`${id_matricula}/${id_radicacion}/${nombre}.pdf`, 30)
      if(error)throw error
      return data;
    } catch (error) {
      await errorHandler(error)
    }
  }

  useEffect(() => {
    validateUserActive()
  }, [])

  return (
    <GeneralContext.Provider value={{
      userNickname,
      setUserNickname,
      getTiposDocumento,
      login,
      validateUserActive,
      signOutUser,
      registerPersonaGeneral,
      getCirculos,
      getDepartamentos,
      getTiposPredio,
      getCiudades,
      getInstrumentosCiudades,
      getInstrumentosNotarias,
      getInstrumentosInstrumento,
      getNaturalezasJuridicas,
      getEstados,
      handleTramiteCambioPropietario,
      getAnotacionesPersona,
      getPredioPersona,
      getAnotacionPersona,
      getPersonaDePersona,
      getPersonaAPersona,
      getPathDocumento
    }}>
      {props.children}
    </GeneralContext.Provider>
  );
}
