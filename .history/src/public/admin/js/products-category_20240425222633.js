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

// Deleted Trash Category
const buttonDeleteTrash=document.querySelectorAll('[button-delete]')
const formDeleteTrash=document.querySelector("#form-delete-trash")
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