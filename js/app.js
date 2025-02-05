// select the update button and working process code
document.getElementById('btn-update').addEventListener('click', function(){
    const inputFieldValue = document.getElementById('task-filed');
    const CreateLi = document.createElement('li');
    CreateLi.innerText = inputFieldValue.value;
    // console.log(CreateLi);
    const listContainer = document.getElementById('List-container');
    CreateLi.classList.add('task-item');
    listContainer.appendChild(CreateLi);
    inputFieldValue.value = ' ';
});

// Delete list items
document.getElementById('List-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})