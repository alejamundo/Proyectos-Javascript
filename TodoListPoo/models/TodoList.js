//Modelo de una lista d etareas agrupaciones
import { Task } from "./Task.js";

export class TodoList {
    constructor() {
        this.listTask = [];
        this.id = this.listTask.length;
    }
    createTask(title) {
        const task = new Task(title, this.id);
        this.id++;
        this.listTask.push(task);

    }
    deleteTask(id) {
        const index=this.listTask.findIndex((item)=>item.id===id);
        let validate=confirm(`¿Esta seguiro de eliminar la terea ${this.listTask[index].title}?`);
        if(validate){   
          this.listTask.splice(index,1);
        }
        return this.listTask;
    }
    
    getTask() {
        return this.listTask;
    }
    //operaciones crud que se le hacen a todas las tareas
}