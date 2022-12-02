import React from 'react'

function Fase4({personaA, personasAList, index, tiposDocumentoView, handlePropietarioARemove, handlePropietarioAChange}) {
  return (
    <div className="row g-3 mt-4 mb-4" key={index} style={{background:"white", border:"none"}}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <label htmlFor="inputCirculo1" className="form-label">Tipo de Documento</label>
            <select className='form-select' id={"opcionTipoDocumento" + index}
        name="tipoDocumento" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.tipoDocumento}>
            {tiposDocumentoView.map((elemento)=>(
                <option key={elemento.id_tipo_documento} value={elemento.id_tipo_documento}>{elemento.id_tipo_documento}</option>
            ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
        <label htmlFor="inputCirculo1" className="form-label">Numero de Documento</label>
        {
            personaA.numeroDocumento.length===0 ? (
                <input type="text" className="form-control is-invalid" required id={"opcionNumeroDocumento" + index} name="numeroDocumento" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.numeroDocumento}/>
            ) : (
                <input type="text" className="form-control is-valid" required id={"opcionNumeroDocumento" + index} name="numeroDocumento" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.numeroDocumento}/>   
            )
        }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
        <label htmlFor="inputCirculo1" className="form-label">Primer nombre</label>
        {
            personaA.nombre1.length===0 ? (
                <input type="text" className="form-control is-invalid" required id={"opcionPrimerNombre" + index} name="nombre1" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.nombre1}/>
            ) : (
                <input type="text" className="form-control is-valid" required id={"opcionPrimerNombre" + index} name="nombre1" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.nombre1}/>
            )
        }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <label htmlFor="inputCirculo1" className="form-label">Segundo nombre</label>
        <input type="text" className="form-control" id={"opcionSegundoNombre" + index} name="nombre2" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.nombre2}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
        <label htmlFor="inputCirculo1" className="form-label">Primer Apellido</label>
        {
            personaA.apellido1.length===0 ? (
                <input type="text" className="form-control is-invalid" required id={"opcionPrimerApellido" + index} name="apellido1" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.apellido1}/>
            ) : (
                <input type="text" className="form-control is-valid" required id={"opcionPrimerApellido" + index} name="apellido1" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.apellido1}/>
            )
        }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <label htmlFor="inputCirculo1" className="form-label">Segundo Apellido</label>
        <input type="text" className="form-control" id={"opcionSegundoApellido" + index} name="apellido2" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.apellido2}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation">
        <label htmlFor="inputCirculo1" className="form-label">Porcentaje de propiedad</label>
        {
            personaA.porcentaje.length===0 ? (
                <div className="input-group">
                <input type="number" className="form-control is-invalid" required aria-label="Recipient's username" aria-describedby="basic-addon2" id={"opcionPorcentaje" + index} name="porcentaje" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.porcentaje}/>
                <span className="input-group-text" id="basic-addon2">%</span>
                </div>
            ):(
                <div className="input-group">
                <input type="number" className="form-control is-valid" required aria-label="Recipient's username" aria-describedby="basic-addon2" id={"opcionPorcentaje" + index} name="porcentaje" onChange={(e) => handlePropietarioAChange(e, index)} value={personaA.porcentaje}/>
                <span className="input-group-text" id="basic-addon2">%</span>
                </div>
            )
        }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <label htmlFor="inputCirculo1" className="form-label">Aclaracion</label>
        <input type="textarea" className="form-control" required id={"opcionAclaracion" + index} name="aclaracion" onChange={(e) => handlePropietarioAChange(e, index)} placeholder="si tiene alguna digitela" value={personaA.aclaracion}/>
        </div>
        {
            personasAList.length>1 ? (
            <div className="d-grid gap-2 d-md-block text-start mb-4 mt-4">
                <button className='btn btn-danger btn-lg' onClick={()=>handlePropietarioARemove(index)} >Eliminar persona</button>
            </div>
            ) : (
            <div></div>
            )
        }
    </div>
  )
}

export default Fase4