module.exports= () =>{
    let objectKeyword ={
        keyword : '',
    }
    if(req.query.keyword){
        objectKeyword.keyword=req.query.keyword
        const regax= new RegExp(objectKeyword.keyword,'i')
        objectKeyword.regax=regax   
    }
    return objectKeyword
}