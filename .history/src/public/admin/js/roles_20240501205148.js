// Permission
const tablePermissions=document.querySelector("[table-permissions]")
console.log(tablePermissions)
if(tablePermissions){
    const buttonSubmit=document.querySelector("[button-submit]")

    buttonSubmit.addEventListener("click",() =>{
        let permission =[]

        const rows=tablePermissions.querySelectorAll("[data-name]")
        console.log(rows)
    })
}
// End Permission