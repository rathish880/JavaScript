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
            var flag=true;
            //posts.push(post);
            if(flag)
                resolve();
            else
                reject('Error:Something went wrong'); 
        },2000);
    });
}

// async function display(){
//     await createPost({title:'Post 4',body:'post 4 has been created'});
//     getPosts();
    
// }
// display();


// async/await and fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=res.json();
    console.log(users);
}
fetchUsers();