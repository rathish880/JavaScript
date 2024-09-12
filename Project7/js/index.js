
//document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('myForm');

    form.addEventListener('submit',bookMark);
    
    function bookMark(e){
        e.preventDefault();
        let siteName=document.getElementById('siteName').value;
        let siteUrl=document.getElementById('siteUrl').value;
    

        if(!validateForm(siteName,siteUrl)){
            form.reset();
            return false;
        }
        var bookmarks={
            name:siteName,
            url:siteUrl
        }
        
        if(localStorage.getItem('bookmarks')===null){
            var bookmark=[];
            bookmark.push(bookmarks);
            localStorage.setItem('bookmarks',JSON.stringify(bookmark));
        }
        else{ 
            var bookmark=JSON.parse(localStorage.getItem('bookmarks'));
            bookmark.push(bookmarks);
            localStorage.setItem('bookmarks',JSON.stringify(bookmark));
        }
        form.reset();
        fetchBookmarks();

        //clear fields
        
    }

    
    function fetchBookmarks(){
    
        var bookmarksResults=document.getElementById('bookmarksResults');
    
        var bookmark=JSON.parse(localStorage.getItem('bookmarks'));
    
        var output='';
        bookmark.forEach(sites=>{
            output+=`<div class="well">
                        <h2>${sites.name} <a  class="btn btn-default" target="_blank" href=${sites.url}>Visit</a>
                            <a onClick="deleteBookmark('${sites.url}')" class="btn btn-danger" href="#">Delete</a>
                        </h2>
                        
                     </div>`;
        });
        bookmarksResults.innerHTML=output;
    }
    function deleteBookmark(url){
        let bookmark=JSON.parse(localStorage.getItem('bookmarks'));
        // for(let i=0;i<bookmark.length;i++){
        //     if(bookmark[i].url==url)
        //         bookmark.splice(i,1);
        // }
        
        result=bookmark.filter(sites=>sites.url!=url);
        localStorage.setItem('bookmarks',JSON.stringify(result));
        fetchBookmarks();
    }
    function validateForm(name,url){
        if(name==null||url==null){
            alert('Enetr the valid details');
            return false;
        }
        let regex=new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
        if(!url.match(regex)){
            alert('enter valid URL');
            return false;
        }
        return true;
        
    }
//})
