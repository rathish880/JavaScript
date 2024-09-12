// console.log(`hello`);
// console.log("hello");
// window.alert('welcome All');


// let age = 25;

// let isexisting =true;
// let gender="Male";


// document.getElementById("h").textContent="DESCRIPTION"
// document.getElementById('p').textContent=`Here you state whatever comes ${gender} to your mind!`;



// document.getElementById(`p1`).textContent = age;
// document.getElementById('p2').textContent = isexisting;
// document.getElementById("p3").textContent= gender;



// console.log(age);
// console.log(typeof(age));
// console.log(` we ave ${age} years old `);
// console.log(`we have eight ${age} in our country`);


// let username=window.prompt("What's your name?");
// console.log(username);

// let username;
// document.getElementById("isubmit").onclick=function(){
//     username=document.getElementById("name").value;
//     console.log(username);
//     document.getElementById("dept").textContent="DEPARTMENT FOR FRESHERS";
// }


// const increase=document.getElementById("increasebtn");
// const decrease=document.getElementById("decreasebtn");
// const reset=document.getElementById("resetbtn");
// const countlabel=document.getElementById("countlabel");
// let count=0;

// increase.onclick=function(){
//     count++;
//     countlabel.textContent=count;

// }
// decrease.onclick=function(){
//     count--;
//     countlabel.textContent=count;
// }
// reset.onclick=function(){
//     count=0;
//     countlabel.textContent=count;
// }

// // let x=3.21;
// // console.log(Math.round(x));
// // console.log(Math.floor(x));

// // console.log(Math.ceil(x));

// let randnum;
// let min=100;
// let max=1000;
// let x=Math.floor((Math.random()*(max-min))+min);
// console.log(x);


// const label=document.getElementById("label");
// const submit=document.getElementById("submitbtn");
// const max=100;
// const min=20;

// let randomnum;
// submit.onclick=function(){
//     randomnum=Math.floor((Math.random()*(max-min))+min);
//     label.textContent=randomnum;
// } 
// const text=document.getElementById("text");
// const btn=document.getElementById("submitbtn");
// const content=document.getElementById("content");
// let age;

// btn.onclick=function(){
//     age=text.value;
//     age=Number (age);
//     if(age<18 && age>0){
//         content.textContent='you are not old enough to enter into the website';      
//     }
//     else if(age==0)
//         content.textContent=`you are a new born baby ,because your age is ${age}`;
//     else if(age>=18)
//         content.textContent=`yo are old enough to use the website`;
//     else if(age<0)
//         content.textContent=`you cannot be below zero`;
//     else if(age>100)
//         content.textContent=`you are too old to enter the website`;
//  }


// const checkbox=document.getElementById("subscribe");
// const upi=document.getElementById("upi");
// const credit=document.getElementById("credit");
// const cash=document.getElementById("cash");
// const submit=document.getElementById("btnsubmit");
// const checksub=document.getElementById("checksub");
// const checkradio=document.getElementById("checkpayment");

// submit.onclick=function(){
//     if(checkbox.checked)
//      checksub.textContent="you have been Subscribed !";
//     else 
//      checksub.textContent="You haven't been subscribed !";

//     if(upi.checked){
//         checkradio.textContent="you are willing to pay throuh upi !!!";
//     }
//     else if(credit.checked){
//         checkradio.textContent="you are willing to pay throuh credit !!!";
//     }
//     else if(cash.checked){
//         checkradio.textContent="you are willing to pay throuh cash  !!!";
//     }
//     else{
//         checkradio.textContent="You haven't selected any patment methods !!!";
//     }
// }

// let username=window.prompt("Enter your name:");
// username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);
// let minimum=10;
// let maximum=100;
// let answer=Math.floor(Math.random()*(maximum-minimum)+minimum)
// console.log(answer);

// let guess;
// let attempts=0;
// let temp=true;
// while(temp){
//     guess=window.prompt(`Enter a number between ${minimum} - ${maximum}`);
//     guess=Number(guess);
//     if(isNaN(guess)){
//         window.alert("enter a valid number");
//     }
//     else if(guess<minimum || guess>maximum){
//         window.alert("enter a valid number");
//     }
   
//     else{
//         attempts++;
        
//         if(guess>answer){
//             window.alert("your guess is too high");
//         }
//         else if(guess<answer){
//             window.alert("your guess is too low");
//         }
//         else{
//             window.alert(`your guess is  correct! The answer is ${answer} and it took you ${attempts} attempts`);;
//             temp=false;
//         }

//     }
   
// }

const food1="Apple";
const food2="Mango";
const food3="Coconut";;
const food4="Gauva";

openfridge(food1,food2,food3,food4);

function openfridge(...foods){
    console.log(...foods);
}
