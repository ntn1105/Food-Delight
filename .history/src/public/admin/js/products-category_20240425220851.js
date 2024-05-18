const buttonDelete=document.querySelectorAll('[button-delete]')
const fomrDelete=document.querySelector("#form-delete-item")

if(buttonDelete.length >0){
    const path=fomrDelete.getAttribute("data-path")
    buttonDelete.forEach(button => {
        button.addEventListener('click',() =>{
            const isConfirm = confirm("Bạn có muốn xóa không")
            if(isConfirm){
                const id =button.getAttribute("data-id")

                action=`${path}/${id}?_method=DELETE`

                fomrDelete.action=action
                fomrDelete.submit()
            }
        })
    })
}