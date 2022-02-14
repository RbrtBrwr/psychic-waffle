// Codigo cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function areaHeron(lado1, lado2, lado3){
    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    const semi = perimetro / 2;

    const area = (semi * (semi - lado1) * (semi - lado2) * (semi - lado3)) ** 0.5;
    return area;
}

console.groupEnd();

// Codigo circulo
console.group("Circulo");
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return Math.PI * (radio ** 2);
}

console.groupEnd();

// Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const l1 = input1.value;
    const l2 = input2.value;
    const l3 = input3.value;


    const perimetro = perimetroTriangulo(l1, l2, l3);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const l1 = input1.value;
    const l2 = input2.value;
    const l3 = input3.value;

    const area = areaHeron(l1, l2, l3);
    alert(area);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}