const precioLetra = 450

const productos = []

class Producto {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
    }
}

let cartelesValuados = []

class CartelValuado {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}