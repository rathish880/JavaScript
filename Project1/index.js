// console.log(document.domain);
// console.log(document.URL);
// console.log(document.all[17]);
// console.log(document.all);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// //document.title='Rathish';
// //document.all[17].textContent="Congrats`";
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);


//  getElemenntsByClassName  //
// let items=document.getElementsByClassName("list-group-item");
// console.log(items);
// // items[2].textContent='Hell';
// items[2].style.background='yellow';
// for(let i=0;i<items.length;i++){
//     items[i].style.background='yellow';
// }

//  getElementsByTagName  //

// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0])
// // items[2].textContent='Hell';
// li[2].style.background='yellow';
// for(let i=0;i<li.length;i++){
//     li[i].style.background='yellow';
// }


//  QUERYSELECTOR  //

// let header=document.querySelector('#main-header');
// header.style.borderBottom='solid  6px yellow';
// let value=document.querySelector('input');
// value.value='hello';

// let submit=document.querySelector("input[type='submit']");
// submit.value='great';

// let last_item=document.querySelector('.list-group-item:nth-child(2)');
// last_item.style.color='green';



//  QUERYSELECTORALL  //

// let titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[1].textContent='varmam';
// let odd=document.querySelectorAll('li:nth-child(odd)');
// let even =document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='yellow'
//     even[i].style.background='blue';
// }

//  TRAVERSING THE DOM  //

//  PARENTNODE AND PARENTELEMENT  //

// let itemList=document.getElementById("items");
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement);


// CHILDENNODES AND CHILDREN  //

// let itemList=document.getElementById("items");
// console.log(itemList.childNodes);
// console.log(itemList.children);//mostly preferred

//  FIRSTCHILD AND FIRSTELEMENTCHILD  //

// let itemList=document.getElementById('items');
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor='red';


//  LASTCHILD AND LASTELEMENTCHILD  //

// let itemList=document.getElementById('items');
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor='red';



// creating DOM elements //

// let newDiv=document.createElement('div');
// //insert className
// newDiv.className='hai';
// //insert id
// newDiv.id='bye';
// //insert attribute
// newDiv.setAttribute('title','congrats') 

// let newDivText=document.createTextNode('RATHISH');

// newDiv.appendChild(newDivText);

// newDiv.style.color='red';
// newDiv.style.fontSize='30px'
// let container=document.querySelector('header .container');
// let h=document.querySelector('header .header-title');
// container.insertBefore(newDiv,h)
// console.log(newDiv);



//  EVENTS : addEventListener
// var button=document.getElementById('button').addEventListener('click',buttonClicked);
// function buttonClicked(e){
//     document.getElementById('header-title').textContent='VERIFIED';
//     document.querySelector('#main').style.backgroundColor='red';
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
// }



var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();

    var li=document.createElement('li');
    li.className='list-group-item';
    var item=document.getElementById('item').value;

    var btn=document.createElement('buttton');
    btn.className='btn btn-danger btn-sm float-right delete';
    btn.textContent='X';
    li.appendChild(document.createTextNode(item));
    li.appendChild(btn)
    itemList.appendChild(li);

    
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        console.log(2);
        console.log(e.target.className);

        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text=e.target.value.toLowerCase();

    // get the list items as collection of values
    var items=document.getElementsByTagName('li');

    //convert the collections tp array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}
