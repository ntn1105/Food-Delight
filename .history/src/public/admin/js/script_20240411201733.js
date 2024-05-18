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
    let url= new URL(window.location.href)

    formSearch.addEventListener('submit',(e)=>{

        e.preventDefault()
        const keyword=e.target.elements.keyword.value

        if(keyword){
            url.searchParams.set('keyword',keyword)
        } else{
            url.searchParams.delete('keyword')
        }
        
        window.location.href = url.href
    })
}
//End Form Search//

// Pagination //
const buttonPagination=document.querySelectorAll("[button-pagination]")
if(buttonPagination){
    let url= new URL(window.location.href)

    buttonPagination.forEach(button =>{
        button.addEventListener('click',()=>{
            const page = button.getAttribute("button-pagination")   
            url.searchParams.set('page',page)
            window.location.href = url.href
        })
    })
}
// End Pagination //

// Show Alert//
const showAlert = document.querySelector("[show-alert]")
if(showAlert){
    const time = parseInt(showAlert.getAttribute('data-time'))
    const closeAlert=showAlert.querySelector('[close-alert]')


    setTimeout(() => {
        showAlert.classList.add("alert-hidden")
    }, time);

    closeAlert.addEventListener('click',() =>{
        showAlert.classList.add("alert-hidden")
    })
}

//End  Show Alert//

// Upload Image//
const uploadImage=document.querySelector('[upload-image]')
// End Upload Image//