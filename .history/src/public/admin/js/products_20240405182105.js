//Change Status//
const buttonChangeStatus=document.querySelectorAll('[button-change-status]')
if(buttonChangeStatus.length > 0 ){
    buttonChangeStatus.forEach(button =>{
        button.addEventListener('click',()=>{
            const currentStatus = button.getAttribute('data-status')
        })
    })
}


//End Change Status//