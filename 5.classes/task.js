"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state=this._state*1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
      return;
    } else if (newState > 100) {
      this._state = 100;
      return;
    } 
    this._state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}


"use strict";

class Library{
  constructor(name){
    this.name = name;
    this.books = [];
  }
  
  addBook(book){
    if(book.state > 30)
      this.books.push(book);
  }

  findBookBy(type, value){
    let result;
    if(type == "type"){
      result =  this.books.find((book)=>{return book.type==value});
    }else if(type == "author"){
      result =  this.books.find((book)=>{return book.author==value});
    }else if(type == "name"){
      result =  this.books.find((book)=>{return book.name==value});
    }else if(type == "releaseDate"){
      result =  this.books.find((book)=>{return book.releaseDate==value});
    }else if(type == "pagesCount"){
      result =  this.books.find((book)=>{return book.pagesCount==value});
    }
    if(result != undefined)
      return result;
    return null;
  }

  giveBookByName(bookName){
    let result = this.books.find((book) => {return book.name==bookName});
    if (result == undefined){
      return null;
    }
    const index = this.books.indexOf(result);
    if(index > -1){
      this.books.splice(index, 1);
    }
    return result;
  }
}

"use strict";

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log("Ошибка: неверный формат оценки");
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, cur) => acc + cur, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const sum = subjects.reduce((acc, cur) => acc + this.getAverageBySubject(cur), 0);
    return sum / subjects.length;
  }
}

