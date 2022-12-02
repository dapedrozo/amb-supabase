import{b,r as o,G as _,j as i,a as e,u as S}from"./index.a5e63542.js";import{A as p}from"./index.esm.bce54702.js";function E(c){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0zm0 0h24v24H0z"}},{tag:"path",attr:{d:"M12.126 8.125l1.937-1.937 3.747 3.747-1.937 1.938zM20.71 5.63l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75L20.71 7a1 1 0 000-1.37zM2 5l6.63 6.63L3 17.25V21h3.75l5.63-5.62L18 21l2-2L4 3 2 5z"}}]})(c)}function R(c){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(c)}function B(){const{getAnotacionesPersona:c,getPredioPersona:r,getAnotacionPersona:n,getPersonaDePersona:t,getPersonaAPersona:g,getPathDocumento:v}=o.exports.useContext(_),[N,y]=o.exports.useState([]),[s,w]=o.exports.useState([]),[h,x]=o.exports.useState([]),[u,f]=o.exports.useState([]),[l,P]=o.exports.useState([]),V=async()=>{const a=await c();y(a)},A=async a=>{const d=await r(a);w(d)},D=async a=>{const d=await n(a);P(d)},z=async a=>{const d=await t(a);x(d)},M=async a=>{const d=await g(a);f(d)},C=async(a,d)=>{await A(a),await D(d),await z(d),await M(d)},m=async(a,d,k)=>{const j=await v(a,d,k);window.open(j.signedUrl,"_blank").focus()};return o.exports.useEffect(()=>{V()},[]),i("div",{className:"d-flex justify-content-center text-center mt-4 mb-4",children:e("div",{className:"card col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10",style:{border:"none"},children:[e("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[i("h2",{children:"Mis tramites"}),i("div",{className:"table-responsive",children:e("table",{className:"table caption-top table-hover",children:[i("caption",{}),i("thead",{children:e("tr",{children:[i("th",{scope:"col",children:"# Radicacion"}),i("th",{scope:"col",children:"Matricula"}),i("th",{scope:"col",children:"Ciudad"}),i("th",{scope:"col",children:"Notaria"}),i("th",{scope:"col",children:"Estado de Revision"}),i("th",{scope:"col",children:"Observaciones"}),i("th",{scope:"col",children:"Opciones"})]})}),i("tbody",{children:N.map((a,d)=>e("tr",{className:"text-center",children:[i("td",{className:"text-truncate",children:a.id_radicacion}),i("td",{className:"text-truncate",children:a.id_matricula}),i("td",{className:"text-truncate",children:a.id_ciudad_origen}),i("td",{className:"text-truncate",children:a.id_oficina_origen}),i("td",{className:"text-truncate",children:a.id_nombre_estado}),i("td",{className:"text-truncate",children:a.observaciones===null?"no hay observaciones":a.observaciones}),i("td",{children:e("div",{className:"d-grid gap-2 d-xxl-block",children:[e("button",{type:"button",className:"btn btn-primary me-2","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",onClick:()=>C(a.id_matricula,a.id_radicacion),children:[i(p,{})," info."]}),a.id_nombre_estado==="Rechazado"?i("button",{className:"btn btn-primary me-2",type:"button",children:i(R,{})}):i("button",{className:"btn btn-primary me-2",type:"button",children:i(E,{})})]})})]},d))})]})})]}),i("div",{className:"modal fade",id:"staticBackdrop","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:i("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl",children:e("div",{className:"modal-content",children:[i("div",{className:"modal-header",children:i("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),i("div",{className:"modal-body",children:i("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:i("div",{className:"row",children:i("div",{className:"col",children:e("div",{className:"card card-body text-start",children:[e("div",{className:"row",children:[e("div",{className:"col",children:[i("h2",{children:"Datos Registrados del Predio"}),s.map((a,d)=>e("div",{children:[e("p",{children:["Numero de Matricula: ",a.id_matricula]}),e("p",{children:["Numero de Circulo: ",a.id_circulo]}),e("p",{children:["Departamento: ",a.departamentos.nombre_departamento]}),e("p",{children:["Ciudad: ",a.id_ciudad_origen]}),e("p",{children:["Direccion del Predio: ",a.direccion_actual]}),e("p",{children:["Tipo de Predio: ",a.id_tipo_predio]})]},d))]}),e("div",{className:"col",children:[i("h2",{children:"Datos Registrados de la Anotacion"}),l.map((a,d)=>e("div",{children:[e("p",{children:["Id de la radicacion: ",a.id_radicacion]}),e("p",{children:["Fecha de la anotacion: ",a.fecha_anotacion]}),e("p",{children:["Ciudad donde se realizo el tramite: ",a.id_ciudad_origen]}),e("p",{children:["Oficina donde se realizo el tramite: ",a.id_oficina_origen]}),e("p",{children:["Instrumento: ",a.instrumentos_especificos.id_instrumento]}),e("p",{children:["Naturaleza Juridica: ",a.id_naturaleza_juridica]}),e("p",{children:["Complemento: ",a.id_naturaleza_complemento===null?"No hay complemento":a.id_naturaleza_complemento]}),e("p",{children:["Estado: ",a.id_estado]}),e("p",{children:["Valor de la transaccion: ",a.valor]}),e("p",{children:["Estado de revision en el AMB: ",a.id_nombre_estado]}),e("p",{children:["Observaciones del AMB: ",a.observaciones,a.observaciones===null?"No hay Observaciones":a.observaciones]})]},d))]})]}),e("div",{className:"row",children:[e("div",{className:"col",children:[e("h2",{children:["Datos Registrados de",h.length===1?" las personas que ceden el predio":" la persona que ceden el predio"]}),h.map((a,d)=>e("div",{children:[e("p",{children:["Primer nombre: ",a.persona.id_nombre_1]}),e("p",{children:["Segundo nombre: ",a.persona.id_nombre_2]}),e("p",{children:["Primer apellido: ",a.persona.id_apellido1]}),e("p",{children:["Segundo apellido: ",a.persona.id_apellido2]}),e("p",{children:["Tipo de Documento: ",a.id_tipo_documento]}),e("p",{children:["Numero de Documento: ",a.id_documento]}),e("p",{children:["Porcentaje de propiedad del predio: ",a.id_porcentaje," %"]}),e("p",{children:["Aclaracion: ",a.id_aclaracion===""?"No hay aclaracion":a.id_naturaleza_complemento]})]},d))]}),e("div",{className:"col",children:[e("h2",{children:["Datos Registrados de",u.length===1?" las personas que reciben el predio":" la persona que recibe el predio"]}),u.map((a,d)=>e("div",{children:[e("p",{children:["Primer nombre: ",a.persona.id_nombre_1]}),e("p",{children:["Segundo nombre: ",a.persona.id_nombre_2]}),e("p",{children:["Primer apellido: ",a.persona.id_apellido1]}),e("p",{children:["Segundo apellido: ",a.persona.id_apellido2]}),e("p",{children:["Tipo de Documento: ",a.id_tipo_documento]}),e("p",{children:["Numero de Documento: ",a.id_documento]}),e("p",{children:["Porcentaje de propiedad del predio: ",a.id_porcentaje," %"]}),e("p",{children:["Aclaracion: ",a.id_aclaracion===""?"No hay aclaracion":a.id_naturaleza_complemento]})]},d))]})]}),i("div",{className:"row mt-4",children:i("div",{className:"col",children:e("div",{className:"d-grid gap-2 col-6 mx-auto",children:[e("button",{onClick:()=>m(s[0].id_matricula,l[0].id_radicacion,"documentacionNotarial"),className:"btn btn-primary",type:"button",children:[i(p,{})," Documento Idenficacion"]}),e("button",{onClick:()=>m(s[0].id_matricula,l[0].id_radicacion,"documentoIdentificacion"),className:"btn btn-primary",type:"button",children:[i(p,{})," Documento notarial"]})]})})})]})})})})}),i("div",{className:"modal-footer",children:i("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})]})})}function I(){const{validateUserActive:c}=o.exports.useContext(_),r=S(),n=async()=>{const t=await c();t==="noUser"&&r("/login"),t==="noRegistro"&&r("/registro")};return o.exports.useEffect(()=>{n()},[n]),i(B,{})}export{I as default};