// This module organize the tasks by unchecked and checked tasks.
// The checked tasks stay in the end of the row (or the page) 

export const organizeTasks = (tasks) => {
        if(tasks.parentNode.classList.contains("checked")) {
            ((tasks.parentElement).parentElement) // get the Main
            .insertAdjacentElement('beforeend', tasks.parentElement)
    
        } else {
            ((tasks.parentElement).parentElement).children[1] // get the firstChild of the Main
            .insertAdjacentElement('afterend', tasks.parentElement)
        };
        
}
