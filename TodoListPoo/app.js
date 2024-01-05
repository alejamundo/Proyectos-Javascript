import { TodoList } from "./models/TodoList.js";
const todoList = new TodoList();

function renderTask(tasks) {
    const container = document.getElementById('registers');
    container.innerHTML = '';
    let content = ''
    for (let i = 0; i < tasks.length; i++) {
        const register =
            ` 
            <tr>
                <th scope="row">${tasks[i].id}</th>
                <td>${tasks[i].title}</td>
                <td>
                    <button type="button" class="btn btn-primary" onclick="updat(${tasks[i].id})" ><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger" onclick="dele(${tasks[i].id})" ><i class="bi bi-trash3"></i></button>
                </td>
                
            </tr>
        `
        content += register;
    };
    container.innerHTML = content;
}

window.dele = (id) => {
    const newList=todoList.deleteTask(id);
    renderTask(newList);
}

window.updat = (id) => {

    const inputTitle=document.getElementById('title');
    const btnSave=document.getElementById('save');
    btnSave.style.display='none';
    
    const containerUpdate=document.getElementById('containerUpdate');
    containerUpdate.innerHTML='';
    const createBtn=document.createElement('button');
    createBtn.classList.add('btn','btn-warning');
    createBtn.innerText='Update task';
    createBtn.type='submit';
    containerUpdate.appendChild(createBtn);

    const index=todoList.listTask.findIndex((item)=>item.id===id);
    inputTitle.value=todoList.listTask[index].title;

    createBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const newTitle=inputTitle.value;
        todoList.listTask[index].title=newTitle;
        renderTask(todoList.listTask);
        containerUpdate.innerHTML='';
        btnSave.style.display='';
        inputTitle.value='';
        
        console.log( )
    });
}

function main() {
    const title = document.getElementById('title');
    const save = document.getElementById('save');
    save.addEventListener('click', (e) => {

        e.preventDefault();
        if (title.value) {
            todoList.createTask(title.value);
            title.value = '';
            renderTask(todoList.getTask())

        } else {
            alert('I should add a task!')
        }
    });


}
main();