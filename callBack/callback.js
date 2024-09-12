
function sum(callback,x,y){
    let result=x+y;
    display(result);
}
function display(result){
    document.getElementById('heading').textContent=result;
}
sum(display,3,4);