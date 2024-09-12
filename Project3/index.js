//Get input element
var input=document.getElementById('filter-input');
//Add event Listener
input.addEventListener('keyup',filterItems);


function filterItems(e){
    //get value of input
    var inputValue=e.target.value.toLowerCase();
   // console.log(inputValue);

   //one way of solving
//    var items=document.getElementsByClassName('collection-item');
//    Array.from(items).forEach(function(item){
//     var value=item.textContent;
//     if(value.toLowerCase().indexOf(inputValue)!=-1){
//         item.style.display=''
//     }

//     else{
//         item.style.display='none'
//     }
//    });


    // another way of solving
    
    var items=document.querySelectorAll('li.collection-item');
    for(let i=0;i<items.length;i++){
        var a=items[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toLowerCase().indexOf(inputValue)!=-1){
            items[i].style.display='';

        }
        else{
            items[i].style.display='none';
        }
    }
}