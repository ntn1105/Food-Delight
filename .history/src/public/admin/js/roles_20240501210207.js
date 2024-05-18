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
                        id : id
                    })
                })
            }
        })
    })
}
// End Permission