const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//listta de notas con valores
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

//sumar todos los pesos
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);


//obtengo el arreglo de los creditos
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

//suma los elementos del arreglo
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;