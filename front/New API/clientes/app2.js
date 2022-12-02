fetch('http://localhost:3006/api/contactos', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        let infoall = document.getElementById('infoall');  
        let despliegue = '';
        for (let i = 0; i < data.length; i++) {
            despliegue += `<option value="${data[i].id}">${data[i].nombre}</option>`
        }
        infoall.innerHTML += despliegue;
    })





const  fulldata= document.getElementById('infoall'); 
fulldata.addEventListener('change', () => {
    let informa = document.getElementById('informa'); info
    console.log(fulldata.value)
    fetch(`http://localhost:3006/api/contactos/${fulldata.value}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            informa.innerHTML = '';
            informa.innerHTML += `<p>${data[0].nombre}<br>${data[0].celular}<br>${data[0].email}</p>`
        })
})


const listAll = document.getElementById('btnList');
listAll.addEventListener('click', () => {
    fetch('http://localhost:3006/api/contactos', { method: 'GET' })
        .then(response => response.json())
        .then(json => {
            let list = document.getElementById('list'); 
            let records = '';
            for (let i = 1; i < json.length; i++) {
                records += `<p>Registro: ${json[i].id}<br></p><p>${json[i].nombre}<br>${json[i].celular}<br>${json[i].email}</p>`
            }
            list.innerHTML = records;
        })

})

const completejson = document.getElementById('btnPost'); cjson
completejson.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let correo = document.getElementById('correo').value;
    let edad = document.getElementById('edad').value;
    let activo = document.getElementById('activo').value;
    let dependi = document.getElementById('dependency').value;
    let depy = []; 
    for (let i = 0; i < dependi; i++) {
        let nombre = document.getElementById(`nom${i}`).value;
        let edad = document.getElementById(`eda${i}`).value;
        depy.push({ nombre: nombre, edad: edad })
    }
    let Fjson = { 
        nombre: nombre,
        celular: celular,
        correo: correo,
        edad: edad,
        activo: activo,
        dependientes: depy
    }
    console.log(depy)
    console.log(Fjson)
    fetch('http://localhost:3006/api/contactos/', {
            method: 'POST',
            body: JSON.stringify(Fjson),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            let infoall = document.getElementById('detalles');
            infoall.innerHTML += `Contacto agregado correctamente`
        })
})

const depen = document.getElementById('btnDepen');
depen.addEventListener('click', () => {
    let dependents = document.getElementById('dependiente'); dependientes
    let dep = document.getElementById('dependi').value;
    dependents.innerHTML = '';
    for (let i = 0; i < dep; i++) {
        dependents.innerHTML += `<form class="form"> <p>dependiente ${i+1}</p>
        <label for="nom${i}">nombre
        
        <input id="nom${i}" name="nom${i}">

        </label><br>
        <label for="eda${i}">edad

        <input id="eda${i}" name="eda${i}">

        </label><br><br>
        </form>`
    }
})

const oculOne = document.getElementById('btnOc');
oculOne.addEventListener('click', () => {
    let informa = document.getElementById('info');
    informa.innerHTML = '';
})
const ocul = document.getElementById('btnOcul');
ocul.addEventListener('click', () => {
    let list = document.getElementById('list');
    list.innerHTML = '';
})
const detalles = document.getElementById('btnDetails');
detalles.addEventListener('click', () => {
    let detalles = document.getElementById('detalles');
    detalles.innerHTML = '';
})
	