// PROMPT DI INSERIMENTO DEL NOME
let nome = prompt ('Inserisci il tuo nome');
document.getElementById('nome').innerHTML = nome;
//console.log(nome)

// PROMPT DI INSERIMENTO DEL COGNOME
let cognome = prompt ('Inserisci il tuo cognome');
document.getElementById('cognome').innerHTML = cognome;
//console.log(cognome)

// PROMPT DI INSERIMENTO DEL COLORE PREFERITO
let colore = prompt ('Inserisci il tuo colore preferito');
document.getElementById('colore').innerHTML = colore;
//console.log(colore)

// AGGIUNTA NUMERO
let numero = 21;
//console.log(numero)

// UNIONE ELEMENTI
let pass = nome + cognome + colore + numero;
//console.log(pass)

//PASSWORD
document.getElementById('password').innerHTML = `${pass}`