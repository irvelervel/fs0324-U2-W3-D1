// in JS è possibile creare un oggetto "al volo", tramite la cosiddetta "notazione letterale" (dopo l'uguale si aprono le graffe)
const dog = {
  // un oggetto è una collezione di coppie chiave: valore
  // una coppia che contiene un'informazione è detta PROPRIETÀ
  name: 'Fido',
  furColors: ['black', 'brown'],
  // ma una coppia può anche contenere come valore una FUNZIONE, che va a definire il COMPORTAMENTO dell'oggetto
  // questi sono detti METODI
  bark: function () {
    return 'bau'
  },
}

console.log(dog.name) // 'Fido'
console.log(dog.furColors[1]) // 'brown'
console.log(dog.bark()) // 'bau'

console.log(dog.__proto__) // Object, ovvero il prototipo JS da cui parte la creazione di qualsiasi oggetto

const person = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  teach: function () {
    // se create un metodo dentro un oggetto, tipicamente "this" punterà a quell'oggetto
    console.log(this)
    // attenzione! se create questo metodo con una funzione freccia, "this" NON punterà più all'oggetto person!
    // una differenza tra le funzioni "normali" e le funzioni freccia, riguarda il significato della parola "this"
    // normalmente le funzioni tradizionali hanno un proprio contesto di esecuzione e assegnano "this" all'oggetto
    // in cui sono contenute... ma una funzione freccia invece NON possiede un proprio contesto di esecuzione, e di
    // conseguenza "eredita" il this dall'ambiente circostante
    // return 'Io mi chiamo ' + this.firstName + ' e insegno JS'
    return `Io mi chiamo ${this.firstName} e insegno JS`
  },
}
// TIPICAMENTE, i metodi di un oggetto sono costruiti con funzioni "classiche" (NON con le funzioni a freccia),
// in modo da mantenere correttamente il riferimento a "this"

console.log(person.teach()) // 'Io mi chiamo Stefano e insegno JS'
