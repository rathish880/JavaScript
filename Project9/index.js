const modal=document.getElementById('my-modal');
const modalbtn=document.getElementById('modal-btn');
const closebtn=document.getElementsByClassName('close')[0];

modalbtn.addEventListener('click',addModal);
closebtn.addEventListener('click',closeModal);
window.addEventListener('click',closeOuter);


function addModal(){
    modal.style.display='block';
}
function closeModal(){
    modal.style.display='none';
}
function closeOuter(e){
    if(e.target==modal){
        modal.style.display='none';
    }
}