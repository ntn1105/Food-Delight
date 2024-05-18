// Deleted Category
const buttonDelete=document.querySelectorAll('[button-delete]')
const formDelete=document.querySelector("#form-delete-item")
if(buttonDelete.length >0){
    const path=formDelete.getAttribute("data-path")
    buttonDelete.forEach(button => {
        button.addEventListener('click',() =>{
            const isConfirm = confirm("Bạn có muốn xóa không")
            if(isConfirm){
                const id =button.getAttribute("data-id")

                action=`${path}/${id}?_method=DELETE`

                formDelete.action=action
                formDelete.submit()
            }
        })
    })
}

// Change Status Category//
const buttonChangeStatusCategory=document.querySelectorAll('[button-change-status]')
if(buttonChangeStatusCategory.length > 0 ){
    const formChangseStatus=document.querySelector("#form-changestatus-category")
    const path =formChangseStatus.getAttribute('data-path')

    buttonChangeStatusCategory.forEach(button =>{
        button.addEventListener('click',()=>{
            const currentStatus = button.getAttribute('data-status')
            const id = button.getAttribute('data-id')

            let changeStatus = currentStatus == "active" ? "inactive" : "active"

            const action = path + `/${changeStatus}/${id}`+'?_method=PATCH'
            formChangseStatus.action=action
            formChangseStatus.submit()
        })
    })
}
// End Change Status Category//
