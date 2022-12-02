import React from 'react'

function Fase2({tramitNotaria, index, handleTramiteNotariaChange, instrumentosCiudadesView, instrumentosNotariasView, instrumentosInstrumentosView, naturalezasJuridicasView, estadosView}) {
  return (
    <div className="row g-3 mt-4 mb-4" key={index} style={{background:"white", border:"none"}}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 has-validation">
            <label htmlFor="inputCirculo1" className="form-label">Id de Radicacion</label>
            {
                tramitNotaria.idRadicacion.length===0 ? (
                    <input type="text" className="form-control is-invalid" required id={"opcionTramiteIdRadicacion" + index} name="idRadicacion" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.idRadicacion}/>
                ) : (
                    <input type="text" className="form-control is-valid" required id={"opcionTramiteIdRadicacion" + index} name="idRadicacion" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.idRadicacion}/>
                )
            }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
            <label htmlFor="inputCirculo1" className="form-label">Fecha de Anotacion</label>
            {
                tramitNotaria.fechaAnotacion.length===0 ? (
                    <input type="date" className="form-control is-invalid" required id={"opcionTramiteFechaAnotacion" + index} name="fechaAnotacion" max={new Date().toISOString().split("T")[0]} onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.fechaAnotacion}/>
                ) : (
                    <input type="date" className="form-control is-valid" required id={"opcionTramiteFechaAnotacion" + index} name="fechaAnotacion" max={new Date().toISOString().split("T")[0]} onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.fechaAnotacion}/>
                )
            }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Ciudad donde su tramite fue notariado</label>
            <select className='form-select' id={"opcionTramiteCiudadTramiteNotarial" + index}
            name="ciudadTramiteNotarial" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.ciudadTramiteNotarial}>
                {instrumentosCiudadesView.map((elemento)=>(
                <option key={elemento} value={elemento}>{elemento}</option>
                ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Notaria donde su tramite fue registrado</label>
            <select className='form-select' id={"opcionTramiteNotaria" + index}
            name="notaria" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.notaria}>
                {instrumentosNotariasView.map((elemento)=>(
                <option key={elemento} value={elemento}>{elemento}</option>
                ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Nombre Instrumento</label>
            <select className='form-select' id={"opcionTramiteNombreInstrumento" + index}
            name="nombreInstrumento" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.id_numero_instrumento}>
                {instrumentosInstrumentosView.map((elemento)=>(
                <option key={elemento.id_numero_instrumento} value={elemento.id_numero_instrumento}>{elemento.id_instrumento}</option>
                ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Naturalezas Juridicas</label>
            <select className='form-select' id={"opcionTramiteNaturalezasJuridicas" + index}
            name="naturalezaJuridica" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.naturalezaJuridica}>
                {naturalezasJuridicasView.map((elemento)=>(
                <option key={elemento.id_naturaleza_juridica} value={elemento.id_naturaleza_juridica}>{elemento.id_naturaleza_juridica}</option>
                ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Complemento</label>
            <input type="text" className="form-control" id={"opcionTramiteComplemento" + index} name="complemento" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.complemento} placeholder="si tiene alguno digitelo"/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <label htmlFor="inputCirculo1" className="form-label">Estado de su proceso notarial</label>
            <select className='form-select' id={"opcionTramiteEstadoProcesoNotarial" + index}
            name="estadoProcesoNotarial" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.estadoProcesoNotarial}>
                {estadosView.map((elemento)=>(
                <option key={elemento.id_estado} value={elemento.id_estado}>{elemento.id_estado}</option>
                ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
            <label htmlFor="inputCirculo1" className="form-label">Valor de la transaccion</label>
            {
                tramitNotaria.valorTransaccion.length===0 ? (
                    <input type="number" className="form-control is-invalid" id={"opcionTramiteValorTransaccion" + index} name="valorTransaccion" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.valorTransaccion} />
                ) : (
                    <input type="number" className="form-control is-valid" id={"opcionTramiteValorTransaccion" + index} name="valorTransaccion" onChange={(e) => handleTramiteNotariaChange(e, index)} value={tramitNotaria.valorTransaccion} />
                )
            }
        </div>
    </div>
  )
}

export default Fase2