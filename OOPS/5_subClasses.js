class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getDescription(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}
const mag=new Magazine('Roots','Lincoln','2007','November');
console.log(mag);