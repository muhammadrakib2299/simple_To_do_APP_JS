// select the update button and working process code
document.getElementById('btn-update').addEventListener('click', function(){
    const inputFieldValue = document.getElementById('task-filed');
    const CreateLi = document.createElement('li');
    CreateLi.innerText = inputFieldValue.value;
    // console.log(CreateLi);
    const listContainer = document.getElementById('List-container');
    listContainer.appendChild(CreateLi);
    inputFieldValue.value = ' ';
});