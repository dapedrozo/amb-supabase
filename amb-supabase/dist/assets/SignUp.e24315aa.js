import{u as q,r as n,G,j as o,a as r}from"./index.a5e63542.js";function O(){const a=q(),{getTiposDocumento:l,validateUserActive:c,signOutUser:i,registerPersonaGeneral:d}=n.exports.useContext(G),[m,u]=n.exports.useState(""),[p,h]=n.exports.useState(""),[N,g]=n.exports.useState(""),[b,v]=n.exports.useState(""),[f,s]=n.exports.useState(""),[x,y]=n.exports.useState(""),[D,S]=n.exports.useState([]),A=async()=>{const e=await l();S(e),s(e[0].id_tipo_documento)},C=async e=>{e.preventDefault(),await d({primerNombre:m,segundoNombre:p,primerApellido:N,segundoApellido:b,tipoDocumento:f,numeroDocumento:x}),a("/")},w=e=>{const{value:t}=e.target;u(t)},P=e=>{const{value:t}=e.target;h(t)},_=e=>{const{value:t}=e.target;g(t)},T=e=>{const{value:t}=e.target;v(t)},F=e=>{const{value:t}=e.target;s(t)},U=e=>{const{value:t}=e.target;y(t)},j=async()=>{await i(),a("/login")},k=async()=>{const e=await c();e==="noUser"&&a("/login"),e!=="noRegistro"&&a("/")};return n.exports.useEffect(()=>{A(),k()},[]),o("div",{children:o("div",{className:"container mt-4 mb-4",children:o("form",{className:"row justify-content-center",onSubmit:e=>C(e),children:r("div",{className:"card col-xs-10 col-sm-10 col-md-8  text-center",style:{border:"none"},children:[r("div",{className:"card-header",style:{background:"white-gray",border:"none"},children:[o("h2",{children:"Parece que no estas registrado"}),o("h5",{children:"No te preocupes completar tu registro es facil y rapido"})]}),o("div",{className:"card-body",style:{background:"white-gray",border:"none"},children:r("div",{className:"row g-3",children:[r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputName1",className:"form-label",children:"Primer Nombre"}),o("input",{type:"text",className:"form-control",required:!0,id:"inputName1",onChange:e=>w(e)})]}),r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputName2",className:"form-label",children:"Segundo Nombre"}),o("input",{type:"text",className:"form-control",id:"inputName2",onChange:e=>P(e)})]}),r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputApellidos1",className:"form-label",children:"Primer Apellido"}),o("input",{type:"text",className:"form-control",required:!0,id:"inputApellidos1",onChange:e=>_(e)})]}),r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputApellidos2",className:"form-label",children:"Segundo Apellido"}),o("input",{type:"text",className:"form-control",id:"inputApellidos2",onChange:e=>T(e)})]}),r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputTipoDoc1",className:"form-label",children:"Tipo de Documento"}),o("select",{id:"inputTipoDoc1",className:"form-select",onChange:e=>F(e),children:D.map(e=>o("option",{value:e.id_tipo_documento,children:e.id_tipo_documento},e.id_tipo_documento))})]}),r("div",{className:"col-md-6",children:[o("label",{htmlFor:"inputNumeroDoc1",className:"form-label",children:"Numero de Documento"}),o("input",{type:"text",className:"form-control",required:!0,id:"inputNumeroDoc1",onChange:e=>U(e)})]}),o("button",{type:"submit",className:"btn btn-lg",style:{backgroundColor:"#3366CC",color:"white"},children:"Registrarme"}),o("p",{className:"btn btn-lg btn-danger",onClick:j,children:"Cancelar"})]})})]})})})})}function V(){return o(O,{})}export{V as default};
