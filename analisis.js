
//Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){            
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}
//Calculadora de medianas
function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
//Mediana General
const salariosCol = colombia.map(

    function(persona){
    return persona.salary;
    }
);
//salarios ordenados
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
         return salaryA - salaryB;
    }
);
const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Mediana del top 10%
//splice corta el arreglo en dos partes y las obtiene, posicion inicial y cuantos elementos se obtendran
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salarioscColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
    );
const medianaTop10Col = medianaSalariosCol(salariosColSorted);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});