// Permission
const tablePermissions=document.querySelector("[table-permissions]")
if(tablePermissions){
    const buttonSubmit=document.querySelector("[button-submit]")

    buttonSubmit.addEventListener("click",() =>{
        let permission =[]

        const rows=tablePermissions.querySelectorAll("[data-name]")

        rows.forEach(row =>{
            const name= row.getAttribute("data-name")
            const inputs = row.querySelectorAll("input")

            if(name=="id"){
                inputs.forEach(input =>{
                    const id =input.value
                    permission.push({
                        id : id,
                        permission:[]
                    })
                })
            } else{
                inputs.forEach((input,index) =>{
                    const checked = input.checked
                    
                    if(checked){
                        permission[index].permission.push(name)
                    }
                })
            }
        })

        console.log(permission)

        if(permission.length >0){
            const formChangePermissions= document.querySelector('#form-change-permissions')
            console.log(formChangePermissions)
            const inputPermissions=formChangePermissions.querySelector("input[name='permissions']")
            inputPermissions.value= JSON.stringify(permission)
            formChangePermissions.submit()
        }
    })
}
// End Permission

// Permissions Default
const dataRecords=document.querySelector("[data-records]")
if(dataRecords){
    const records=JSON.parse(dataRecords.getAttribute("data-records"))

    const tablePermissions=document.querySelector("[table-permissions]")

    records.forEach((record,index) =>{
        const permissions = record.permission
        permissions.forEach(permission =>{
            const row = tablePermissions.querySelector(`[data-name="${permission}"]`)
            const input = row.querySelectorAll("input")[index]

            input.checked = true
        })
    })

}
// End Permissions Default