// prototypes


function book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
book.prototype.getDescription=function(){
    return `${this.title}`;
}
//  instantiate an Object
const book1=new book('Wolf Torem','Bilgee','1999');
console.log(book1);