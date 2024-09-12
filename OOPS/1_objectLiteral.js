//  object literal
const book1={
    title:'Wolf Totem',
    Author:'Bilgee',
    year:'1999',
    setDescription:function(){
        return `${book1.title} was written by ${book1.Author} in ${book1.year}`;
    }
}

//console.log(book1.setDescription());
console.log(Object.keys(book1));