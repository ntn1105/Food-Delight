//Button Status//
const buttonStatus=document.querySelectorAll('[button-status]')
if(buttonStatus.length>0){
    let url= new URL(window.location.href)

    buttonStatus.forEach(button =>{
        button.addEventListener('click',() =>{
            const status = button.getAttribute('button-status')
            if(status){
                url.searchParams.set('status',status)
            } else{
                url.searchParams.delete('status')
            }
            
            window.location.href = url.href
        })
    })
}
//End Button Status//

//Form Search//
const formSearch=document.querySelector('#form-search')
if(formSearch){
    formSearch.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(e.target.elements.keyword.value)
    })
}


//End Form Search//