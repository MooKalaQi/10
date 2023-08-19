let lastCheck;
const checklists = document.querySelectorAll(".item input")

function handleChecklist(e) {
    let inBetween = false  
    if(e.shiftKey && this.checked){
        checklists.forEach(checklist =>{
            console.log(checklist)
            if(checklist === this || checklist === lastCheck){
                inBetween = !inBetween;
                console.log("checking for between");
            }
            if(inBetween){
                checklist.checked = true;
            }
        }
        )
    }
    console.log(this)
    lastCheck=this;  
}

checklists.forEach(checklist => checklist.addEventListener("click", handleChecklist))
console.log(checklists)