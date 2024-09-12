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
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
createPost({title:'Post 3',body:'post 3 has been created'},getPosts);