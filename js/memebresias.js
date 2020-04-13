fetch('http://wspa.com.ar/api/wp-json/acf/v3/membresias')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += membresiasTemplate(el))
  document.getElementById("membresias").innerHTML = html
})


function membresiasTemplate (membresia) {
    const circuito = membresia.acf.es_esta_membresia_unicamente_para_circuito_de_aguas
    return `
    <div class="row col-12">
        <!-- Fila de 1 -->
        <!-- MÓDULO TRATAMIENTO HORIZONTAL A UN PRECIO -->
        <div class="mod-treatment hlp-bg-third one-price">
            <div class="row no-gap">
                <img class="com-image" src="${membresia.acf.imagen_destacada}" alt="${membresia.acf.nombre_de_la_membresia}" />
            </div>
            <div class="row no-gap --description">
                <div class="com-title">
                    <h4 class="pre-title">Válido durante ${membresia.acf.validez_de_la_membresia} días.</h4>
                    <h2 class="treatment-title">${membresia.acf.nombre_de_la_membresia}</h2>
                </div>
                <div class="com-detail">
                    <ul class="com-list">
                        ${circuito ? console.log(circuito) : ''}
                        <li class="first-level"><i class="icon-check"></i> Acceso al Circuito de Aguas (120
                            minutos) de miércoles a
                            domingos, durante todo el mes contratado:</li>
                        <li class="sub-level">• Piscina in/out climatizada con cascadas cervicales
                            e hidromasaje integrado </li>
                        <li class="sub-level">• Sala de relax con tumbonas térmicas</li>
                        <li class="sub-level">• Sala de hidratación</li>
                        <li class="sub-level">• Terraza con solárium y reposeras con vista a la Bahía Grande
                        </li>
                    </ul>
                </div>
                <div class="com-price">
                    <h5>${membresia.acf.precio}.-</h5>
                    <a href="${membresia.acf.link_de_pago}"
                        class="com-button" target="_blank">COMPRÁ ONLINE</a>
                </div>
            </div>
        </div>
        <!-- /MÓDULO TRATAMIENTO HORIZONTAL A UN PRECIO -->
    </div>    
    `

}