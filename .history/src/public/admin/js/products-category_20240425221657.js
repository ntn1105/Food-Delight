const buttonDelete=document.querySelectorAll('[button-delete]')
console.log(buttonDelete)
const formDelete=document.querySelector("#form-delete-item")
console.log(formDelete)
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