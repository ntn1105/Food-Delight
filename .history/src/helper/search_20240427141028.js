module.exports= (query) =>{
    let objectKeyword ={
        keyword : '',
    }
    if(query.keyword){
        objectKeyword.keyword=query.keyword
        const regax= new RegExp(objectKeyword.keyword,'i','g','m')
        objectKeyword.regax=regax  
    }
    return objectKeyword
}