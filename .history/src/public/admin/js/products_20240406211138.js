//Change Status//
const buttonChangeStatus=document.querySelectorAll('[button-change-status]')
if(buttonChangeStatus.length > 0 ){
    const formChangseStatus=document.querySelector("#form-change-status")
    const path =formChangseStatus.getAttribute('data-path')

    buttonChangeStatus.forEach(button =>{
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

//End Change Status//

//Checkbox Multi//
const checkboxMulti=document.querySelector("[checkbox-multi]")
if(checkboxMulti){
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']")
    const inputsID=checkboxMulti.querySelectorAll("input[name='id']")
    
    inputCheckAll.addEventListener('click',() =>{
        if(inputCheckAll.checked){
            inputsID.forEach(input =>{
                input.checked=true
            })
        }else{
            inputsID.forEach(input =>{
                input.checked=false
            })
        }
    })

    inputsID.forEach(input =>{
        input.addEventListener('click',() =>{
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length

            if(inputsID.length == countChecked){
                inputCheckAll.checked=true
            }else{
                inputCheckAll.checked=false
            }

        })
    })
}
//ENd Checkbox Multi//

// Form Change Multi//
const formChangeMulti = document.querySelector("[form-change-multi]")
if(formChangeMulti){
    formChangeMulti.addEventListener('submit',(e) =>{
        e.preventDefault()

        const checkboxMulti=document.querySelector("[checkbox-multi]")
        const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked")

        if(inputsChecked.length >0){
            let ids=[]
            const inputIds=formChangeMulti.querySelector("input[name='ids']")
            inputsChecked.forEach(input =>{
                const id=input.value
                ids.push(id)  
            })
            inputIds.value=ids.join(',')
            formChangeMulti.submit()
        }else{
            alert("Vui lòng chọn ít nhất một bản ghi")
        }

    })
}
// End Form Change Multi//

//Delete Item//
const buttonDelete=document.querySelectorAll('[button-delete]')
const fomrDelete=document.querySelector("[form-delete-item]")
const path=fomrDelete.getAttribute("data-path")

console.log(buttonDelete)

if(buttonDelete.length >0){
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
//End Delete Item//