const spinnerFacial = document.getElementById("spinner1");
const spinnerCorporal = document.getElementById("spinner2");
const spinnerPremium = document.getElementById("spinner3");

fetch('http://wspa.com.ar/api/wp-json/acf/v3/faciales')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += tratamientoTemplate(el))
  spinnerFacial.setAttribute('hidden', '')
  document.getElementById("list-faciales").innerHTML = html
})


fetch('http://wspa.com.ar/api/wp-json/acf/v3/corporales')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += tratamientoTemplate(el))
  spinnerCorporal.setAttribute('hidden', '')
  document.getElementById("list-corporales").innerHTML = html
})

fetch('http://wspa.com.ar/api/wp-json/acf/v3/premium')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += tratamientoTemplate(el))
  spinnerPremium.setAttribute('hidden', '')
  document.getElementById("list-premium").innerHTML = html
})
 

  function setBackgroundClassName(id) {
    if(id % 2 == 0) {
      return "hlp-bg-third";
    }
    else {
      return "hlp-bg-secondary";
    }
  }


  function tratamientoTemplate (tratamiento) {
    return `
    <div id="mod-treatment" class="mod-treatment ${setBackgroundClassName(tratamiento.id)} --simple">
      <div class="header">
        <h2>${tratamiento.acf.nombre_del_tratamiento}</h2>
        <div class="com-price">
            <h5>$${tratamiento.acf.precio_del_tratamiento}-</h5>
        </div>
      </div>
      <div class="body">
        <p>
         ${tratamiento.acf.descripcion_del_tratamiento}
        </p>
        <div class="com-actions">
            <a href="${tratamiento.acf.link_para_solicitar_turno}" target="_blank"
                class="com-button">SOLICITAR TURNO</a>
            <a href="${tratamiento.acf.link_para_regalar}" target="_blank"
                class="com-button">REGALAR</a>
        </div>
      </div>  
    </div>
    `
  }
  