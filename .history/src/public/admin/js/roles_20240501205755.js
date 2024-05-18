// Permission
const tablePermissions=document.querySelector("[table-permissions]")
if(tablePermissions){
    const buttonSubmit=document.querySelector("[button-submit]")

    buttonSubmit.addEventListener("click",() =>{
        let permission =[]

        const rows=tablePermissions.querySelectorAll("[data-name]")

        rows.forEach(row =>{
            const name= row.getAttribute("data-name")
            console.log(name)
        })
    })
}
// End Permission