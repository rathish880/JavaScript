
const textbox=document.getElementById("textbox");
const tofarenheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelcius");
const unit=document.getElementById("units");
let temp;
function convert(){
    if(tofarenheit.checked){
        temp=Number(textbox.value);
        temp=temp*(9/5)+32;
        unit.textContent=temp.toFixed(1)+"°F";
    }
    else if(tocelsius.checked){
      
        temp=Number(textbox.value);
        temp=temp*(5/9)-32;
        unit.textContent=temp.toFixed(2)+"°";
    }
    else{
        console.log("anonic");
        unit.textContent = "choose a unit";
    }

}