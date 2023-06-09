/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1


Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//eser.1 
let name1 = "raffaele1" 
let number1 = 55
let canYouDrive = 100
console.log ("name1", name1)
console.log ("number1, number1 ", number1)
console.log ("canYouDrive", canYouDrive)
//i tipi primitivi sono stringa, numero e boolean

//eser.2 
let name = "Raffaele"
console.log("Raffaele", name)
//creata variabile name in stringa

//eser. 3
let number1 = 10
let number2 = 15
let number3 = number1 + number2
console.log ("contr number3", number3)
//creata somma tra due variabili

//eser.4
 let x = 12
 console.log("var x", x) 
 //variabile numero 12

 //eser. 5
 name = "raffo"
 const nome = "luigi"
 nome = "gigi"
 console.log ("contr name", name)
 console.log("contr const", nome)
 // la variabile let puo cambiare, la const non puo cambiare

 //eser. 6
 let r = 4
 let x = 12
 let sottr = r - x
 console.log("contr sottr", sottr)

 //sottr. di due variabili

 //eser. 7
 let name1 = "john"
let name2 = "John"
let name3 = name1 !== name2
console.log ("diff nome", name3)