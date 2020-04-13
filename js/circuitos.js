fetch('http://wspa.com.ar/api/wp-json/acf/v3/faciales')
.then(response => response.json())
.then(json => {
  let html = '';
  json.forEach(el =>  html += circuitoSpaTemplate(el))
  document.getElementById("circuitos").innerHTML = html
})


function circuitoSpaTemplate(circuito) {
    return `
    
    `
}