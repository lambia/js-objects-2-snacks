// let nome = 'Paolo';
// let age = 30;
// let email = 'paolo@email.it';
 
// //slide 3 (es. es5)
// const student = {
//     nome: nome,
//     age: age,
//     email: email
// };
// console.log( student );
 
// //slide 3 (es. es6 nuovo)
// const student_nuovo = {
//     nome,
//     age,
//     email
// };
// console.log( student_nuovo );

//slide 4 (chiavi dinamiche)
// const nomeProprieta = prompt("Inserisci il NOME della proprietà in cui scrivere");
// const valoreProprieta = prompt("Inserisci il VALORE della proprietà da scrivere");
 
// const student_dinamico = {
//     nome: "Luca Lambiase",
//     eta: 33,
//     codfisc: "LMBLTM90C23H703P",
//     [nomeProprieta]: valoreProprieta
// };

// // student_dinamico[nomeProprieta] = valoreProprieta;

// console.log(student_dinamico);

// let nomeStudente = student_dinamico.nome;
// let etaStudente = student_dinamico.eta;

// console.log("Destrutturazione ES5", nomeStudente, etaStudente);

// let { eta } = student_dinamico;

// console.log("Destrutturazione ES6", nome, eta);


// function myFunction(messaggio, ...argomenti) {
//     console.log("Messaggio: ", messaggio);
//     console.log("Argomenti vari: ", argomenti);

//     argomenti.forEach(argomento => {
//         console.log(argomento);
//     })
// }

// myFunction( "ciao mondo!", 2, 3, 5, 8 );
// //avremo un array composto da tre elementi
   
	
const pallaGenerica = {
    name: 'palla',
    peso: 50
};

// attenzione al collegamento con pallaGenerica
// const superSantos = pallaGenerica;
// superSantos.color = "arancione";

const superSantosES5 = {
    name: pallaGenerica.name,
    peso: pallaGenerica.peso,
    color: "arancione"
};

const superSantosES6 = {
    ...pallaGenerica,
    color: "arancione"
};

console.log(pallaGenerica);
console.log(superSantosES5);
console.log(superSantosES6);


// const copyObj = {...obj, colore: 'blue'};
// console.log(copyObj); 