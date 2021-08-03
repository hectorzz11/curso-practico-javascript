const lista1 = [
1,
2,
3,
1,
2,
3,
4,
2,
2,
2,
1,
];

const lista1Count = {};
//recorre la lista
lista1.map(
    function(elemento){

        //si este elemento ya existe en la lista se valida
        if(lista1Count[elemento]){

                lista1Count[elemento] += 1;
        }
        else{
        lista1Count[elemento] = 1;
        }

    }


);
//object.entries se puede mandar un objeto para convertirlo en array
//sort lo ordena
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
       return elementoA[1] - elementoB[1]
    }

);
const moda = lista1Array[lista1Array.length - 1];