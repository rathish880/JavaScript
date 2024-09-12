const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //  for-loop

//   for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
//   }


//  forEach

// companies.forEach(function(company){
//     console.log(company.name);
// })


// filter

// const canDrink=ages.filter(function(age){
//     if(age>21)
//             return true;
// })
// console.log(canDrink);

// const canDrink=ages.filter(age=> age>=21);
// console.log(canDrink);

// const comp=companies.filter(function(company){
//     if(company.category==='Retail'){
//         return true;
//     }
// });
// console.log(comp);


//  map 

// const comp=companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`
// });
// console.log(comp);

// const comp=companies.map((company)=>
// `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(comp);

// const ageSqrt=ages.map(age=>Math.round(Math.sqrt(age)));
// console.log(ageSqrt);



//   sort

// const companySorted=companies.sort(function(c1,c2){
//   if(c1.start>c2.start){
//     return 1;
//   }
//   else{
//     return -1;
//   }
  
// });

// const companySorted=companies.sort((c1,c2)=> c1.start-c2.start);
// console.log(companySorted);

//sort the ages 
// const agesSorted=ages.sort();
// console.log(agesSorted);
// const agesSorted=ages.sort((a,b)=>a-b);  // when a-b is +ve ( A positive value indicates that 'a' should come after 'b' ).
// console.log(agesSorted);//                  when a-b is -ve ( A negative value indicates that 'a' should come before 'b' ).
//                                          when a-b is 0 ( Zero or NaN indicates that 'a' and 'b'   are considered equal ).


//  reduce

// const sum=ages.reduce(function(total,value){
//   return total+value;
// });
// console.log(sum);

// const sum=ages.reduce((total,value)=> total+value);
// console.log(sum);

//  comnbine methods : filter,map,reduce,sort

const combined=ages.map((age)=>age*2)
                  .filter((age)=>age>=40)
                  .sort((a,b)=>a-b)
                  .reduce((a,b)=>a+b);

console.log(combined);