import{a as i,j as o,r as p,G as wo,u as Fo,F as R}from"./index.a5e63542.js";import{a as ko,b as To}from"./index.esm.bce54702.js";function So({tramitPredio:l,index:t,handleTramitePredioChange:a,departamentosView:_,ciudadesView:f,tiposPredioView:d}){return i("div",{className:"row g-3 mt-4 mb-4",style:{background:"white",border:"none"},children:[i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Matricula"}),l.matricula.length===0?o("input",{type:"number",className:"form-control is-invalid",required:!0,id:"opcionTramiteMatricula"+t,name:"matricula",onChange:e=>a(e,t),value:l.matricula}):o("input",{type:"number",className:"form-control is-valid",required:!0,id:"opcionTramiteMatricula"+t,name:"matricula",onChange:e=>a(e,t),value:l.matricula})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Circulo Registral"}),o("input",{type:"text",disabled:!0,className:"form-control",required:!0,id:"opcionTramiteCirculo"+t,name:"circulo",value:l.circulo})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Catastro"}),o("input",{type:"text",disabled:!0,className:"form-control",required:!0,id:"opcionTramiteCatastro"+t,name:"catastro",value:l.catastro})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Departamento"}),o("select",{className:"form-select",id:"opcionTramiteDepartamento"+t,name:"departamentos",onChange:e=>a(e,t),value:l.departamentos,children:_.map(e=>o("option",{value:e.id_departamento,children:e.nombre_departamento},e.id_departamento))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Ciudad"}),o("select",{className:"form-select",id:"opcionTramiteCiudad"+t,name:"ciudads",onChange:e=>a(e,t),value:l.ciudads,children:f.map(e=>o("option",{value:e.id_ciudad_origen,children:e.id_ciudad_origen},e.id_ciudad_origen))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Direccion Actual"}),l.direccionActual.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionTramiteDireccionActual"+t,name:"direccionActual",onChange:e=>a(e,t),value:l.direccionActual}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionTramiteDireccionActual"+t,name:"direccionActual",onChange:e=>a(e,t),value:l.direccionActual})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Tipo de predio"}),o("select",{className:"form-select",id:"opcionTramiteTipoPredio"+t,name:"TipoPredio",onChange:e=>a(e,t),value:l.TipoPredio,children:d.map(e=>o("option",{value:e.id_tipo_predio,children:e.id_tipo_predio},e.id_tipo_predio))})]})]},t)}function jo({tramitNotaria:l,index:t,handleTramiteNotariaChange:a,instrumentosCiudadesView:_,instrumentosNotariasView:f,instrumentosInstrumentosView:d,naturalezasJuridicasView:e,estadosView:S}){return i("div",{className:"row g-3 mt-4 mb-4",style:{background:"white",border:"none"},children:[i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Id de Radicacion"}),l.idRadicacion.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionTramiteIdRadicacion"+t,name:"idRadicacion",onChange:r=>a(r,t),value:l.idRadicacion}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionTramiteIdRadicacion"+t,name:"idRadicacion",onChange:r=>a(r,t),value:l.idRadicacion})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Fecha de Anotacion"}),l.fechaAnotacion.length===0?o("input",{type:"date",className:"form-control is-invalid",required:!0,id:"opcionTramiteFechaAnotacion"+t,name:"fechaAnotacion",max:new Date().toISOString().split("T")[0],onChange:r=>a(r,t),value:l.fechaAnotacion}):o("input",{type:"date",className:"form-control is-valid",required:!0,id:"opcionTramiteFechaAnotacion"+t,name:"fechaAnotacion",max:new Date().toISOString().split("T")[0],onChange:r=>a(r,t),value:l.fechaAnotacion})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Ciudad donde su tramite fue notariado"}),o("select",{className:"form-select",id:"opcionTramiteCiudadTramiteNotarial"+t,name:"ciudadTramiteNotarial",onChange:r=>a(r,t),value:l.ciudadTramiteNotarial,children:_.map(r=>o("option",{value:r,children:r},r))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Notaria donde su tramite fue registrado"}),o("select",{className:"form-select",id:"opcionTramiteNotaria"+t,name:"notaria",onChange:r=>a(r,t),value:l.notaria,children:f.map(r=>o("option",{value:r,children:r},r))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Nombre Instrumento"}),o("select",{className:"form-select",id:"opcionTramiteNombreInstrumento"+t,name:"nombreInstrumento",onChange:r=>a(r,t),value:l.id_numero_instrumento,children:d.map(r=>o("option",{value:r.id_numero_instrumento,children:r.id_instrumento},r.id_numero_instrumento))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Naturalezas Juridicas"}),o("select",{className:"form-select",id:"opcionTramiteNaturalezasJuridicas"+t,name:"naturalezaJuridica",onChange:r=>a(r,t),value:l.naturalezaJuridica,children:e.map(r=>o("option",{value:r.id_naturaleza_juridica,children:r.id_naturaleza_juridica},r.id_naturaleza_juridica))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Complemento"}),o("input",{type:"text",className:"form-control",id:"opcionTramiteComplemento"+t,name:"complemento",onChange:r=>a(r,t),value:l.complemento,placeholder:"si tiene alguno digitelo"})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Estado de su proceso notarial"}),o("select",{className:"form-select",id:"opcionTramiteEstadoProcesoNotarial"+t,name:"estadoProcesoNotarial",onChange:r=>a(r,t),value:l.estadoProcesoNotarial,children:S.map(r=>o("option",{value:r.id_estado,children:r.id_estado},r.id_estado))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Valor de la transaccion"}),l.valorTransaccion.length===0?o("input",{type:"number",className:"form-control is-invalid",id:"opcionTramiteValorTransaccion"+t,name:"valorTransaccion",onChange:r=>a(r,t),value:l.valorTransaccion}):o("input",{type:"number",className:"form-control is-valid",id:"opcionTramiteValorTransaccion"+t,name:"valorTransaccion",onChange:r=>a(r,t),value:l.valorTransaccion})]})]},t)}function Do({personaDe:l,personasDeList:t,index:a,tiposDocumentoView:_,handlePropietarioDeRemove:f,handlePropietarioDeChange:d}){return i("div",{className:"row g-3 mt-4 mb-4",style:{background:"white",border:"none"},children:[i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Tipo de Documento"}),o("select",{className:"form-select",id:"opcionTipoDocumento"+a,name:"tipoDocumento",onChange:e=>d(e,a),value:l.tipoDocumento,children:_.map(e=>o("option",{value:e.id_tipo_documento,children:e.id_tipo_documento},e.id_tipo_documento))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Numero de Documento"}),l.numeroDocumento.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionNumeroDocumento"+a,name:"numeroDocumento",onChange:e=>d(e,a),value:l.numeroDocumento}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionNumeroDocumento"+a,name:"numeroDocumento",onChange:e=>d(e,a),value:l.numeroDocumento})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Primer nombre"}),l.nombre1.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionPrimerNombre"+a,name:"nombre1",onChange:e=>d(e,a),value:l.nombre1}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionPrimerNombre"+a,name:"nombre1",onChange:e=>d(e,a),value:l.nombre1})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Segundo nombre"}),o("input",{type:"text",className:"form-control",id:"opcionSegundoNombre"+a,name:"nombre2",onChange:e=>d(e,a),value:l.nombre2})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Primer Apellido"}),l.apellido1.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionPrimerApellido"+a,name:"apellido1",onChange:e=>d(e,a),value:l.apellido1}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionPrimerApellido"+a,name:"apellido1",onChange:e=>d(e,a),value:l.apellido1})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Segundo Apellido"}),o("input",{type:"text",className:"form-control",id:"opcionSegundoApellido"+a,name:"apellido2",onChange:e=>d(e,a),value:l.apellido2})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Porcentaje de propiedad"}),l.porcentaje.length===0?i("div",{className:"input-group",children:[o("input",{type:"number",className:"form-control is-invalid",required:!0,"aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"opcionPorcentaje"+a,name:"porcentaje",onChange:e=>d(e,a),value:l.porcentaje}),o("span",{className:"input-group-text",id:"basic-addon2",children:"%"})]}):i("div",{className:"input-group",children:[o("input",{type:"number",className:"form-control is-valid",required:!0,"aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"opcionPorcentaje"+a,name:"porcentaje",onChange:e=>d(e,a),value:l.porcentaje}),o("span",{className:"input-group-text",id:"basic-addon2",children:"%"})]})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Aclaracion"}),o("input",{type:"textarea",className:"form-control",required:!0,id:"opcionAclaracion"+a,name:"aclaracion",onChange:e=>d(e,a),value:l.aclaracion,placeholder:"si tiene alguna digitela"})]}),t.length>1?o("div",{className:"d-grid gap-2 d-md-block text-start mb-4 mt-4",children:o("button",{className:"btn btn-danger btn-lg",onClick:()=>f(a),children:"Eliminar persona"})}):o("div",{})]},a)}function qo({personaA:l,personasAList:t,index:a,tiposDocumentoView:_,handlePropietarioARemove:f,handlePropietarioAChange:d}){return i("div",{className:"row g-3 mt-4 mb-4",style:{background:"white",border:"none"},children:[i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Tipo de Documento"}),o("select",{className:"form-select",id:"opcionTipoDocumento"+a,name:"tipoDocumento",onChange:e=>d(e,a),value:l.tipoDocumento,children:_.map(e=>o("option",{value:e.id_tipo_documento,children:e.id_tipo_documento},e.id_tipo_documento))})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Numero de Documento"}),l.numeroDocumento.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionNumeroDocumento"+a,name:"numeroDocumento",onChange:e=>d(e,a),value:l.numeroDocumento}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionNumeroDocumento"+a,name:"numeroDocumento",onChange:e=>d(e,a),value:l.numeroDocumento})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Primer nombre"}),l.nombre1.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionPrimerNombre"+a,name:"nombre1",onChange:e=>d(e,a),value:l.nombre1}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionPrimerNombre"+a,name:"nombre1",onChange:e=>d(e,a),value:l.nombre1})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Segundo nombre"}),o("input",{type:"text",className:"form-control",id:"opcionSegundoNombre"+a,name:"nombre2",onChange:e=>d(e,a),value:l.nombre2})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Primer Apellido"}),l.apellido1.length===0?o("input",{type:"text",className:"form-control is-invalid",required:!0,id:"opcionPrimerApellido"+a,name:"apellido1",onChange:e=>d(e,a),value:l.apellido1}):o("input",{type:"text",className:"form-control is-valid",required:!0,id:"opcionPrimerApellido"+a,name:"apellido1",onChange:e=>d(e,a),value:l.apellido1})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Segundo Apellido"}),o("input",{type:"text",className:"form-control",id:"opcionSegundoApellido"+a,name:"apellido2",onChange:e=>d(e,a),value:l.apellido2})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6 has-validation",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Porcentaje de propiedad"}),l.porcentaje.length===0?i("div",{className:"input-group",children:[o("input",{type:"number",className:"form-control is-invalid",required:!0,"aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"opcionPorcentaje"+a,name:"porcentaje",onChange:e=>d(e,a),value:l.porcentaje}),o("span",{className:"input-group-text",id:"basic-addon2",children:"%"})]}):i("div",{className:"input-group",children:[o("input",{type:"number",className:"form-control is-valid",required:!0,"aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"opcionPorcentaje"+a,name:"porcentaje",onChange:e=>d(e,a),value:l.porcentaje}),o("span",{className:"input-group-text",id:"basic-addon2",children:"%"})]})]}),i("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:[o("label",{htmlFor:"inputCirculo1",className:"form-label",children:"Aclaracion"}),o("input",{type:"textarea",className:"form-control",required:!0,id:"opcionAclaracion"+a,name:"aclaracion",onChange:e=>d(e,a),placeholder:"si tiene alguna digitela",value:l.aclaracion})]}),t.length>1?o("div",{className:"d-grid gap-2 d-md-block text-start mb-4 mt-4",children:o("button",{className:"btn btn-danger btn-lg",onClick:()=>f(a),children:"Eliminar persona"})}):o("div",{})]},a)}function Io(){const{getCirculos:l,getDepartamentos:t,getTiposPredio:a,getCiudades:_,getInstrumentosCiudades:f,getInstrumentosNotarias:d,getInstrumentosInstrumento:e,getNaturalezasJuridicas:S,getEstados:r,getTiposDocumento:V,handleTramiteCambioPropietario:I}=p.exports.useContext(wo),z=Fo(),[T,P]=p.exports.useState(0),[x,J]=p.exports.useState(0),[Ao,O]=p.exports.useState(""),[G,E]=p.exports.useState([]),[B,M]=p.exports.useState([]),[L,H]=p.exports.useState([]),[K,Q]=p.exports.useState([]),[U,W]=p.exports.useState([]),[X,Y]=p.exports.useState([]),[Z,$]=p.exports.useState([]),[oo,eo]=p.exports.useState([]),[A,ao]=p.exports.useState([]),[h,F]=p.exports.useState([{matricula:"",circulo:"300",catastro:"AMB",departamentos:"",ciudads:"",direccionActual:"",TipoPredio:""}]),[g,y]=p.exports.useState([{idRadicacion:"",fechaAnotacion:"",ciudadTramiteNotarial:"",notaria:"",nombreInstrumento:"",naturalezaJuridica:"",complemento:"",estadoProcesoNotarial:"",valorTransaccion:""}]),[v,j]=p.exports.useState([{tipoDocumento:"Cedula",numeroDocumento:"",nombre1:"",nombre2:"",apellido1:"",apellido2:"",porcentaje:"100",aclaracion:""}]),[N,D]=p.exports.useState([{tipoDocumento:"Cedula",numeroDocumento:"",nombre1:"",nombre2:"",apellido1:"",apellido2:"",porcentaje:100,aclaracion:""}]),[k,lo]=p.exports.useState([{},{}]),C=async n=>{P(n)},co=async n=>{const c=await l();O(c[n].id_circulo);const m=[...h];m[0].circulo=c[n].id_circulo,F(m)},io=async()=>{const n=await t();E(n);const c=[...h];c[0].departamentos=n[0].id_departamento,F(c)},to=async()=>{const n=await _();H(n),co(0);const c=[...h];c[0].ciudads=n[0].id_ciudad_origen,F(c)},no=async()=>{const n=await a();M(n);const c=[...h];c[0].TipoPredio=n[0].id_tipo_predio,F(c)},ro=async()=>{const n=await f(),c=[...new Set(n.map(w=>w.id_ciudad_origen))];Q(c);const m=[...g];m[0].ciudadTramiteNotarial=c[0],y(m);const b=await d(c[0]),u=[...new Set(b.map(w=>w.id_oficina_origen))];W(u),m[0].notaria=u[0],y(m);const q=await e(c[0],u[0]),s=[...new Set(q.map(w=>({id_instrumento:w.id_instrumento,id_numero_instrumento:w.id_numero_instrumento})))];Y(s),m[0].nombreInstrumento=s[0].id_numero_instrumento,y(m)},so=async()=>{const n=await S();$(n);const c=[...g];c[0].naturalezaJuridica=n[0].id_naturaleza_juridica,y(c)},mo=async()=>{const n=await r();eo(n);const c=[...g];c[0].estadoProcesoNotarial=n[0].id_estado,y(c)},uo=async()=>{const n=await V();ao(n)},po=(n,c)=>{const{name:m,value:b}=n.target,u=[...h];u[c][m]=b,m==="ciudads"&&b==="Bucaramanga"||m==="ciudads"&&b==="Floridablanca"||m==="ciudads"&&b==="Giron"?u[c].circulo="300":u[c].circulo="314",F(u)},bo=(n,c)=>{const{name:m,value:b}=n.target,u=[...g];u[c][m]=b,y(u)},ho=async()=>{j([...v,{tipoDocumento:"Cedula",numeroDocumento:"",nombre1:"",nombre2:"",apellido1:"",apellido2:"",porcentaje:100,aclaracion:""}])},go=n=>{const c=[...v];c.splice(n,1),j(c)},vo=(n,c)=>{const{name:m,value:b}=n.target,u=[...v];u[c][m]=b,j(u)},No=async()=>{D([...N,{tipoDocumento:"Cedula",numeroDocumento:"",nombre1:"",nombre2:"",apellido1:"",apellido2:"",porcentaje:100,aclaracion:""}])},Co=n=>{const c=[...N];c.splice(n,1),D(c)},_o=(n,c)=>{const{name:m,value:b}=n.target,u=[...N];u[c][m]=b,D(u)},fo=(n,c)=>{const{files:m}=n.target,b=[...k];b[c]=m,lo(b)},yo=async()=>{J(1);const n=h.map(s=>({id_matricula:s.matricula,id_circulo:s.circulo,id_departamento:s.departamentos,direccion_actual:s.direccionActual,id_tipo_predio:s.TipoPredio,id_ciudad_origen:s.ciudads})),c=g.map(s=>({id_matricula:h[0].matricula,id_radicacion:s.idRadicacion,fecha_anotacion:s.fechaAnotacion.replace("/","-"),id_ciudad_origen:s.ciudadTramiteNotarial,id_oficina_origen:s.notaria,id_numero_instrumento:s.nombreInstrumento,id_naturaleza_juridica:s.naturalezaJuridica,id_naturaleza_complemento:s.id_naturaleza_complemento,id_estado:s.estadoProcesoNotarial,valor:s.valorTransaccion})),m=v.map(s=>({id_tipo_documento:s.tipoDocumento,id_documento:s.numeroDocumento,id_apellido1:s.apellido1,id_apellido2:s.apellido2,id_nombre_1:s.nombre1,id_nombre_2:s.nombre2})),b=N.map(s=>({id_tipo_documento:s.tipoDocumento,id_documento:s.numeroDocumento,id_apellido1:s.apellido1,id_apellido2:s.apellido2,id_nombre_1:s.nombre1,id_nombre_2:s.nombre2})),u=v.map(s=>({id_matricula:h[0].matricula,id_radicacion:g[0].idRadicacion,id_tipo_documento:s.tipoDocumento,id_documento:s.numeroDocumento,id_porcentaje:s.porcentaje,id_aclaracion:s.aclaracion})),q=N.map(s=>({id_matricula:h[0].matricula,id_radicacion:g[0].idRadicacion,id_tipo_documento:s.tipoDocumento,id_documento:s.numeroDocumento,id_porcentaje:s.porcentaje,id_aclaracion:s.aclaracion}));I(n,c,m,b,u,q,k)};return p.exports.useEffect(()=>{C(0),io(),no(),to(),ro(),so(),mo(),uo()},[]),o("div",{className:"container d-flex justify-content-center text-center mt-4 mb-4",children:T===0?o("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8",style:{border:"none"},children:i("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Registra tu predio"}),i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:[h.map((n,c)=>o(So,{tramitPredio:n,index:c,handleTramitePredioChange:po,departamentosView:G,ciudadesView:L,tiposPredioView:B,handleForm:C},c)),i("div",{className:"d-grid gap-3 mt-4",children:[h[0].matricula===""||h[0].direccionActual===""?o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Siguiente"}):o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(1),children:"Siguiente"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>z("/tramites"),children:"Volver"})]})]})]})}):T===1?o("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8",style:{border:"none"},children:i("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Registra tus datos notariales"}),i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:[g.map((n,c)=>o(jo,{tramitNotaria:n,index:c,handleTramiteNotariaChange:bo,instrumentosCiudadesView:K,instrumentosNotariasView:U,instrumentosInstrumentosView:X,naturalezasJuridicasView:Z,estadosView:oo,handleForm:C},c)),i("div",{className:"d-grid gap-3 mt-4",children:[g[0].idRadicacion===""||g[0].fechaAnotacion===""||g[0].valorTransaccion===""?o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Siguiente"}):o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(2),children:"Siguiente"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(0),children:"Volver"})]})]})]})}):T===2?o("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8",style:{border:"none"},children:i("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Bienvenido al Tramite de Cambio de Propietario"}),o("h6",{children:"Registra los datos del propietario/os que cede el predio"}),i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:[v.map((n,c)=>o(Do,{personaDe:n,personasDeList:v,index:c,tiposDocumentoView:A,handlePropietarioDeRemove:go,handlePropietarioDeChange:vo},c)),o("button",{className:"btn btn-primary btn-lg mt-2",onClick:ho,children:"a\xF1adir otro"}),i("div",{className:"d-grid gap-3 mt-4",children:[v[0].numeroDocumento===""||v[0].nombre1===""||v[0].apellido1===""||v[0].porcentaje===""?o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Siguiente"}):o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(3),children:"Siguiente"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(1),children:"Anterior"})]})]})]})}):T===3?o("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8",style:{border:"none"},children:i("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Bienvenido al Tramite de Cambio de Propietario"}),o("h6",{children:"Registra los datos del propietario/os que recibe el predio"}),i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:[N.map((n,c)=>o(qo,{personaA:n,personasAList:N,index:c,tiposDocumentoView:A,handlePropietarioARemove:Co,handlePropietarioAChange:_o},c)),o("button",{className:"btn btn-primary btn-lg mt-2",onClick:No,children:"a\xF1adir otro"}),i("div",{className:"d-grid gap-3 mt-4",children:[N[0].numeroDocumento===""||N[0].nombre1===""||N[0].apellido1===""||N[0].porcentaje===""?o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Siguiente"}):o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(4),children:"Siguiente"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(2),children:"Anterior"})]})]})]})}):o("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8",style:{border:"none"},children:i("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Bienvenido al Tramite de Cambio de Propietario"}),o("h6",{children:"Sube tu documentacion"}),i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:[k.map((n,c)=>i("div",{children:[c===0?o("label",{className:"form-label",htmlFor:"inputGroupFile02",children:"Sube aqui tu documento de identificacion"}):o("label",{className:"form-label",htmlFor:"inputGroupFile02",children:"Sube aqui tus documentos notariales estos pueden ser uno de los siguientes: Copia de la Escritura P\xFAblica, acto administrativo o sentencia Judicial debidamente registrada"}),i("div",{className:"input-group mb-3",children:[o("input",{type:"file",className:"form-control",id:"inputGroupFile02",name:"archivo"+c,onChange:m=>fo(m,c)}),o("label",{className:"input-group-text",htmlFor:"inputGroupFile02",children:n.length>0?o(ko,{className:"text-success"}):o(To,{className:"text-danger"})})]},c)]},c)),o("div",{className:"d-grid gap-3 mt-4",children:Object.entries(k[0]).length===0||Object.entries(k[1]).length===0?o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Guardar"}):x===0?i(R,{children:[o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>yo(),children:"Guardar"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},onClick:()=>C(3),children:"Anterior"})]}):i(R,{children:[o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Guardar"}),o("button",{className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},disabled:!0,children:"Anterior"})]})})]})]})})})}export{Io as default};
