const spinner = document.getElementById("spinner");

fetch('http://wspa.com.ar/api/wp-json/acf/v3/membresias')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += membresiasTemplate(el))
  spinner.setAttribute('hidden', '')
  document.getElementById("membresias").innerHTML = html
})


fetch('http://wspa.com.ar/api/wp-json/acf/v3/circuito_de_aguas')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += circuitoDeAguasTemplate(el))
  spinner.setAttribute('hidden', '')
  document.getElementById("circuitos-de-agua").innerHTML = html
})

function tiTuloMembresia(membresia) {
    return `
    <div class="com-title">
        <h4 class="pre-title">Válido durante ${membresia.acf.validez_de_la_membresia} días.</h4>
        <h2 class="treatment-title">${membresia.acf.nombre_de_la_membresia}</h2>
    </div>
    `
}

function imagenMembresia(membresia) {
    return `
    <div class="com-title">
        <img class="com-image" src="${membresia.acf.imagen_destacada}" alt="${membresia.acf.nombre_de_la_membresia}" />
    </div>
    `
}

function circuitoDeAguas () {
return `
        <li class="sub-level">• Piscina in/out climatizada con cascadas cervicales
            e hidromasaje integrado </li>
        <li class="sub-level">• Sala de relax con tumbonas térmicas</li>
        <li class="sub-level">• Sala de hidratación</li>
        <li class="sub-level">• Terraza con solárium y reposeras con vista a la Bahía Grande
        </li>
`
}

function tratamientosIncluidos (tratamiento) {
    return `
    <div class="com-detail">
        <ul class="com-list">
            ${tratamiento.map(tratamiento => `
                <li class="first-level"><i class="icon-check"></i> ${tratamiento}</li>
            `).join('')}
            ${circuitoDeAguas()}
        </ul>
    </div>  
    ` 
}

function precioMembresia(membresia) {
    return `
        <div class="com-price">
            <h5>$${membresia.acf.precio}.-</h5>
            <a href="${membresia.acf.link_de_pago}" class="com-button" target="_blank">COMPRÁ ONLINE</a>
        </div>
    `
}


function membresiasTemplate (membresia) {
    return `
    <div class="row col-12">

        <div class="mod-treatment hlp-bg-third one-price">
            <div class="row no-gap">
                ${imagenMembresia(membresia)}
            </div>
            
            <div class="row no-gap --description">
                ${tiTuloMembresia(membresia)}

                ${membresia.acf.descripcion_de_a_membresia_ ? tratamientosIncluidos(membresia.acf.descripcion_de_a_membresia_) : ''}

                ${precioMembresia(membresia)}
            </div>
        </div>
    </div>    
    `
}

function circuitoDeAguasTemplate (circuitoDeAguas) {
    return `
    <div class="com-title">
        <h3 class="page-title">CIRCUITO DE AGUAS</h3>
        <h4 class="pre-title">Únicamente de ${circuitoDeAguas.acf.validez}.</h4>
    </div>
    <div class="com-title hlp-border-left-before">
        <h6 class="sub-title"><strong>Precio para Huéspedes:</strong></h6>
        <h6 class="sub-title">2 Hs <strong>$${circuitoDeAguas.acf.precio_para_huespedes_por_2hs}.-</strong></h6>
        <h6 class="sub-title"> 4 Hrs máximo. <strong>$${circuitoDeAguas.acf.precio_para_huespedes_por_4hs}.-</strong></h6>
    </div>
    <div class="com-title hlp-border-left-before">
        <h6 class="sub-title"> <strong>Para clientes que no se hospedan en Wyndham:</strong></h6>
        <h6 class="sub-title"> 2hs <strong>$${circuitoDeAguas.acf.precio_para_externos_2hs}.-</strong></h6>
        <h6 class="sub-title"> 4 Hrs máximo <strong>$${circuitoDeAguas.acf.precio_para_externos_4hs}.-</strong> </h6>
    </div>
    `
}