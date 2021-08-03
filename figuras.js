//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return  lado * 4;
}

//console.log("El perímetro del cuadrado es: "+perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;

}

//console.log("El area del cuadrado es: "+areaCuadrado +"cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("triangulos");
//const ladoTriangulo1= 6;
//const ladoTriangulo2= 6;
//const baseTriangulo = 4;
////console.log(
    ////"Los lados del triangulo miden :" 
    //+ ladoTriangulo1 
    //+ "cm, "
    //+ ladoTriangulo2 
    ////+ "cm, "
    //+ baseTriangulo
    //+ "cm"
    //);
//const alturaTriangulo  = 5.5;
//console.log("La altura del triangulo es: "+alturaTriangulo +"cm");

function perimetroTriangulo(lado1,lado2,base){
return lado1+lado2+base;

}
//console.log("El perimetro del triangulo es: "+perimetroTriangulo +"cm");
function areaTriangulo(base, altura){
    return (base * altura)/2;

}
//console.log("El area del triangulo es: "+areaTriangulo +"cm^2");

//Altu8ra Triangulo Isoceles

console.groupEnd();


//codigo del circulo
console.group("Circulos");
//Radio
function diametroCirculo (radio){
    return radio*2;

}

const PI=Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return  diametro*PI;
}

//Área
function areaCirculo(radio){
    return     (radio * radio) *PI;

}

function alturaTriangulo(lado1,lado2,base){
    if(lado1 === lado2 && lado1 != base && lado2 != base)
    {
        const altura = Math.sqrt(Math.pow(lado1,2)- Math.pow(lado2,2))

    }

}

console.groupEnd();

// Interacción con el html
function calcularPerimetroCuadrado(){
    //obtiene el elemento html 
    const input = document.getElementById("InputCuadrado");
    //se obtiene el valor
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);    

}
function calcularAreaCuadrado(){
        
        const input = document.getElementById("InputCuadrado");
        
        const value = input.value;
    
        const area = areaCuadrado(value);
        alert(area);  


}

