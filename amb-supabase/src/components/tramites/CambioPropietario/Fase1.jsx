import React from 'react'

function Fase1({tramitPredio, index, handleTramitePredioChange, departamentosView, ciudadesView, tiposPredioView}) {

  return (
    <div className="row g-3 mt-4 mb-4" key={index} style={{background:"white", border:"none"}}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 has-validation">
            <label htmlFor="inputCirculo1" className="form-label">Matricula</label>
            {
                tramitPredio.matricula.length===0 ? (
                    <input type="number" className="form-control is-invalid" required id={"opcionTramiteMatricula" + index} name="matricula" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.matricula}/>
                ) : (
                    <input type="number" className="form-control is-valid" required id={"opcionTramiteMatricula" + index} name="matricula" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.matricula}/>
                )
            }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <label htmlFor="inputCirculo1" className="form-label">Circulo Registral</label>
            <input type="text" disabled className="form-control" required id={"opcionTramiteCirculo" + index} name="circulo" value={tramitPredio.circulo}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <label htmlFor="inputCirculo1" className="form-label">Catastro</label>
            <input type="text" disabled className="form-control" required id={"opcionTramiteCatastro" + index} name="catastro" value={tramitPredio.catastro}/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <label htmlFor="inputCirculo1" className="form-label">Departamento</label>
            <select className='form-select' id={"opcionTramiteDepartamento" + index}
        name="departamentos" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.departamentos}>
            {departamentosView.map((elemento)=>(
                <option key={elemento.id_departamento} value={elemento.id_departamento}>{elemento.nombre_departamento}</option>
            ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <label htmlFor="inputCirculo1" className="form-label">Ciudad</label>
            <select className='form-select' id={"opcionTramiteCiudad" + index}
        name="ciudads" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.ciudads}>
            {ciudadesView.map((elemento)=>(
                <option key={elemento.id_ciudad_origen} value={elemento.id_ciudad_origen}>{elemento.id_ciudad_origen}</option>
            ))}
            </select>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 has-validation">
            <label htmlFor="inputCirculo1" className="form-label">Direccion Actual</label>
            {
                tramitPredio.direccionActual.length===0 ? (
                    <input type="text" className="form-control is-invalid" required id={"opcionTramiteDireccionActual" + index} name="direccionActual" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.direccionActual}/>
                ) : (
                    <input type="text" className="form-control is-valid" required id={"opcionTramiteDireccionActual" + index} name="direccionActual" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.direccionActual}/>
                )
            }

        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <label htmlFor="inputCirculo1" className="form-label">Tipo de predio</label>
            <select className='form-select' id={"opcionTramiteTipoPredio" + index}
        name="TipoPredio" onChange={(e) => handleTramitePredioChange(e, index)} value={tramitPredio.TipoPredio}>
            {tiposPredioView.map((elemento)=>(
                <option key={elemento.id_tipo_predio} value={elemento.id_tipo_predio}>{elemento.id_tipo_predio}</option>
            ))}
            </select>
        </div>
    </div>
  )
}

export default Fase1