class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
    
}
class UI{
    static displayBooks(){
        const storedBooks=[
            {
                title:'book1',
                author:'author1',
                isbn:'123'
            },
            {
                title:'book2',
                author:'author2',
                isbn:'456'
            }   
            
        ];
        const books=storedBooks;
        books.forEach((book)=>UI.addBookToList(book));
        
    }

    static addBookToList(book){
        const list=document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML=`<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);

    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
            
        }
        
    }

    static showAlert(message,className){
        var div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        var container=document.querySelector('.container');
        var form=document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(()=>document.querySelector('.alert').remove()
            ,1000);
    }
}


document.addEventListener('DOMContentLoaded',UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit',addItem);
function addItem(e){
    //prevent actual submit
    e.preventDefault();
    //get values from the form
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;
    //instantiate the book
    const book=new Book(title,author,isbn);
    if(book.title==''||book.author==''|| book.isbn==''){
        UI.showAlert('fill the details in the form','danger');
    }else{
        //add book to the UI
        UI.addBookToList(book);
        //show success message
        UI.showAlert('Book successfully added','success');

        //clear the fields
        UI.clearFields();
    }
   
    
    

}

// removing a book from the llist using a sepearte function

// document.querySelector('#book-list').addEventListener('click',deleteItem);
// function deleteItem(e){
//     // console.log(e.target.classList);
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure')){
//             var list=document.querySelector('#book-list');
//             var item=e.target.parentElement.parentElement;
//             list.removeChild(item)
//         }
//     }
// }


//Event: remove a book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target);
    //shoe success message
    UI.showAlert('Book successfully deleted','success');
});