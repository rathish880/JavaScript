class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getDescription(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years old `;
    }
    revise(newYear){
        this.year=newYear;
        this.revised=true;
    }
    //static method
    static getTopBook(){
        return 'Wolf Totem';
    }
}
// instantiate an object
const book1=new Book('The Kite Runner','Afdul','2003');
//console.log(book1);
//book1.revise('2009');
// console.log(book1);
//console.log(book1.getAge());

console.log(Book.getTopBook());