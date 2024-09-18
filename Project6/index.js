

// const search=document.getElementById('search');
// const matchList=document.getElementById('match-list');



// const searchStates =async searchValue=>{
//     var res=await fetch("states.json");
//     var states=await res.json();
//     let matches=states.filter(function(state){
//         let regex=new RegExp(`^${searchValue}`,"gi");
//         return state.name.match(regex) ||state.abbr.match(regex);
//     });
//     if(searchValue.length===0){
//         matches=[];
//         matchList.textContent='';
//     }
//     outputHTML(matches);
       
    
// }
// const outputHTML=(matches)=>{
//     if(matches.length>0){
//         const html=matches.map(match=>
//             `<div class="card card-body mb-4">
//                 <h2>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h2>
//                 <small>${match.lat}/${match.long}</small>
//             </div>`
//         ).join("");
//         matchList.innerHTML=html;
//     }

// }

// search.addEventListener('input',()=>searchStates(search.value));
// console.log("testing...");


const search=document.getElementById('search');
const matchList=document.getElementById('match-list');


const searchStates=async statesValue=>{
    let res=await fetch('states.json');
    let states=await res.json();
    let matches=states.filter(state=>{
        let regex=new RegExp(`^${statesValue}`,"gi");
        return state.name.match(regex) || state.abbr.match(regex);
    });
    if(statesValue.length===0){
        matches=[];
        matchList.textContent='';
    }
    outputHTML(matches); 
}

const outputHTML=(matches)=>{
    if(matches.length>0){
        const HTML=matches.map((match)=>

        
            `<div class="card card-body mb-4">
                <h2>${match.name} (${match.abbr})  <span class="text-primary">${match.capital}</span></h2>
                <small>${match.lat}/${match.long}</small>
            </div>`       
        ).join("");
        matchList.innerHTML=HTML; 
    }
    
}
search.addEventListener('input',()=>searchStates(search.value));
































