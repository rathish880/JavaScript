

document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsInput').addEventListener('input',convertWeight);

function convertWeight(e){
    document.getElementById('output').style.visibility='visible';
    var inputValue=e.target.value;
    document.getElementById('gramsOutput').textContent=inputValue*453.59290944;
    document.getElementById('kgOutput').innerHTML=inputValue/2.20462;
    document.getElementById('ozOutput').textContent=inputValue*16;
}