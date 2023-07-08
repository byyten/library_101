
let myLibrary = [
   
]

function book(auth, title, pages, read=false) {
    this.author = auth
    this.title = title
    this.pages = pages
    this.read = read
    this.haveread = () => {
        this.read = !this.read
    }
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'have read' : 'not yet read'}`
    }
    // return this.title, this.author,this.pages,this.read 
}

function addBookToLibrary(auth, title, pages, read) {
    let bk = new book(title, auth, pages, read)
    myLibrary.push(bk)
}

function getIndex(id) {
    return myLibrary.findIndex(bk =>  bk.title.replace(/\s/g, '_') === id)
            
}
function listLibrary() {

    mybooks = [
        { author: 'Ann Rand', title: 'the Fountainhead', pages: 689, read: true },
        { author: 'Maria Ressa', title: 'How to stand up to a Dictator', pages: 365, read: false },
        { author: 'Micheal Wolff', title: 'Fire and Fury', pages: 582, read: true },
        { author: 'Richard Condon', title: 'the Manchurian Candidate', pages: 853, read: false },
    ]
    mybooks.forEach(bk => {
        addBookToLibrary(bk.title, bk.author, bk.pages, bk.read)
    })

    let table = document.querySelector('.library')
    let tbody = table.querySelector('tbody')
    let clone_row = table.querySelectorAll('tr')[1].cloneNode(true)
    tbody.querySelectorAll('tr')[1].remove()

    myLibrary.forEach(bk => {
        let row = clone_row.cloneNode(true)
        row.querySelector('.title').textContent = bk.title
        row.querySelector('.author').textContent = bk.author
        row.querySelector('.pages').textContent = bk.pages
        row.querySelector('.status').textContent = bk.read ? 'have read' : 'unread'

        let btns = row.querySelectorAll('button')
        let read = btns[0] // haveRead
        read.id = bk.title.replace(/\s/g, '_')
        read.addEventListener('click', (evt) => {
            idx = getIndex(evt.target.id)
            myLibrary[idx].haveread()
            let new_status = myLibrary[idx].read ? 'have read' : 'unread'
            evt.target.parentNode.parentNode.querySelector('td.status').textContent = new_status
        })
        let rmv = btns[1] // rmvBook
        rmv.id = bk.title.replace(/\s/g, '_')
        rmv.addEventListener('click', (evt) => {
            idx = getIndex(evt.target.id)
            myLibrary.splice(idx, 1) 
            evt.target.parentNode.parentNode.remove()            
        })
        tbody.appendChild(row)
    })
    
}

// fh = new book('Ann Rand', 'the Fountainhead', 689, true)
// console.log(fh.info())




















/*

function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

Object.getPrototypeOf(player1) === Player.prototype
player1.valueOf()

y = []
y.__proto__;










// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
let hero1 = new Hero('Bjorn', 1);


Object.getPrototypeOf(hero1);

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

h1 = new Warrior('Conan', 1, 'Axe')
h1.attack()
Object.getPrototypeOf(Object.getPrototypeOf(h1)) .prototype

*/