//Change Status//
const buttonChangeStatus=document.querySelectorAll('[button-change-status]')
if(buttonChangeStatus.length > 0 ){
    buttonChangeStatus.forEach(button =>{
        button.addEventListener('click',()=>{
            const currentStatus = button.getAttribute('data-status')
            const id = button.getAttribute('data-id')

            console.log(currentStatus)
            console.log(id)
        })
    })
}


//End Change Status//