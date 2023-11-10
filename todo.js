

const addTodoBtn = document.getElementById('add-todo')


function addNewTodo() {

    const leftSideBox = document.getElementById('lower-part')
    const rightBox = document.getElementById('right-box')
    const inputText = document.getElementById('input-text')
    const inputValue = inputText.value;

   
    const lowerPart = document.getElementById('lower-part')
    const leftBox = document.createElement("div")
    leftBox.className = "left-box"
    leftBox.id = "left-box"
    leftBox.draggable = "true"
    const hiddenInput = document.createElement('input')
    hiddenInput.type = "hidden"
    const todoItem = document.createElement('p')
    todoItem.id = "item"
    const editButton = document.createElement('button')
    editButton.addEventListener('click', (e) => {
        console.log("ButtonClicked")
        console.log(e.target)
        hiddenInput.type = "text"
        hiddenInput.value = leftBox.firstElementChild.textContent;
        console.log(leftBox.firstElementChild.textContent = "")
        hiddenInput.addEventListener('keypress', (e)=>{
            console.log(e.keyCode)
            if(e.keyCode == 13){
                leftBox.firstElementChild.textContent = hiddenInput.value;
                hiddenInput.type = "hidden"
            }
        })
        // console.log(e.parentElement)
    })
    editButton.className = "btn"
    editButton.id = "edit-todo"
    editButton.innerHTML = "Edit"
    const deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    deleteButton.className = "btn"
    deleteButton.id = "delete-todo"
    deleteButton.innerHTML = "Delete"
    todoItem.innerHTML = `${inputValue}`

    leftBox.append(todoItem, hiddenInput, editButton, deleteButton);
    lowerPart.appendChild(leftBox)

    const allDive = document.querySelectorAll('#left-box')
    allDive.forEach((todo) => {
        todo.addEventListener('dragstart', (e)=>{
            let selected = e.target;
            rightBox.addEventListener('dragover', (e)=>{
                e.preventDefault()
            })
            rightBox.addEventListener('drop', ()=>{
                rightBox.appendChild(selected)
                selected = null;
            })
            leftSideBox.addEventListener('dragover', (e)=>{
                e.preventDefault()
            })
            leftSideBox.addEventListener('drop', ()=>{
                leftSideBox.appendChild(selected)
                selected = null;
            })
        })
        
    })


}



addTodoBtn.addEventListener('click', addNewTodo)
