function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    return precio
}

function generadorAutomatico() {
    productos.push(new Producto("AIMAINA", "HATSUNE MIKU / MUSICA", 3400))
    productos.push(new Producto("ARIEL", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("BLANCANIEVES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("DINO", "ANIMALES / DINOSAURIOS", 3200))
    productos.push(new Producto("DOLORES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("GROGU / BABY YODA", "STAR WARS", 3500))
    productos.push(new Producto("HIPOPOTAMO / HIPPO", "ANIMALES", 3000))
    productos.push(new Producto("MARIO / SUPER MARIO", "MARIO BROS / NINTENDO / GAMES / GAMING", 3900))
    productos.push(new Producto("LADYBUG", "MIRACULOUS", 3600))
    productos.push(new Producto("LEIA", "STAR WARS", 3000))
    productos.push(new Producto("MOANA", "PRINCESA DISNEY", 3300))
    productos.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
    productos.push(new Producto("PADME", "STAR WARS", 3000))
    productos.push(new Producto("SERENA", "SAILOR MOON / ANIME", 3000))
    productos.push(new Producto("TIGRE / TIGER", "ANIMALES", 3600))
    productos.push(new Producto("TORTUGA", "ANIMALES", 3600))
}

generadorAutomatico()

const inputBuscar = document.querySelector("#inputBuscar")

const botonBuscar = document.getElementById("botonBuscar")

botonBuscar.addEventListener("click", busqueda)

const listaBusqueda = document.querySelector("#listaBusqueda")

function busqueda(){
    inputBuscar.value.trim() === "" ? noResults() : motorBusqueda()   
}

function motorBusqueda(){
    let plantilla = ``
    listaBusqueda.innerHTML = ""
    let aBuscar = (inputBuscar.value).toUpperCase()
    let arrayResultados = productos.filter(l => l.nombre.includes(aBuscar) || l.tipo.includes(aBuscar))
    for (elemento of arrayResultados){
        plantilla +=    `<card>
        <h5 class="m-3">${elemento.nombre}</h3>
        <p>${elemento.tipo}</p>
        <p>Precio: ${elemento.precio}</p>
        </card>`
    }
    listaBusqueda.innerHTML += plantilla
    arrayResultados.length === 0 && noResults()
}


function noResults(){
    listaBusqueda.innerHTML = ""
    listaBusqueda.innerHTML += `<h5 class="m-3">Lo sentimos, ¡no encontramos resultados!</h5>`
}

const cartelPersonal = document.getElementById("cartelPersonal")

const inputCartel = document.querySelector("#inputCartel")

inputCartel.addEventListener("keyup", (e)=>{e.keyCode === 13 && presupuestarCartel()})

const botonCartel = document.getElementById("botonCartel")

botonCartel.addEventListener("click", presupuestarCartel)

let carteles = []

function presupuestarCartel(){
    cartelPersonal.innerHTML = ""
    let cartel = inputCartel.value
    let letras = cartel.length
    let precio = calcular (letras, precioLetra)
    cartelPersonal.innerHTML += "<h3>"+cartel.toUpperCase()+"</h3><p> ¡Gracias por tu consulta! 😊 Este cartel tiene un valor de "+precio+" pesos.</p>"
    inputCartel.value = ""
        cartelesValuados.push(new CartelValuado(cartel.toUpperCase(), precio))
        localStorage.setItem("cartelesValuados", JSON.stringify (cartelesValuados))
}

const recuperarCartelesValuados = () => {
    if (localStorage.getItem("cartelesValuados")){
        let cart = JSON.parse(localStorage.getItem("cartelesValuados"))
            for (elemento of cart){
                cartelesValuados.push(elemento)
            }
    }
}

recuperarCartelesValuados()

const botonRefresh = document.querySelector("#botonRefresh")

botonRefresh.addEventListener("click", ()=> location.reload())