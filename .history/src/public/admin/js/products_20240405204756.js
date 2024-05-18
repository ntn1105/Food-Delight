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

            console.log(countChecked)
            console.log(inputsID.length)

        })
    })
}
//ENd Checkbox Multi//