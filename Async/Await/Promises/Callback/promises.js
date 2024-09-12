const posts=[
    {title:'Post 1',body:'post 1 has been created'},
    {title:'Post 2',body:'post 2 has been created'}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`

        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        
            posts.push(post);
            var flag=false;
            //posts.push(post);
            if(flag)
                resolve();
            else
                reject('Error:Something went wrong'); 
        },2000);
    });
}
// createPost({title:'Post 3',body:'post 3 has been created'})
//     .then(getPosts)
//     .catch((e)=>console.log(e));

// fetching data from url 
const promise4=fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json());//taking json as input and converting to Javascript object

const promise1=Promise.resolve('Heloo');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'WORLD');
});

Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
    console.log(values);
})
