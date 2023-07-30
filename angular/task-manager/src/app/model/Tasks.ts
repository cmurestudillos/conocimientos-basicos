import { Task } from './Task';
import { Priority } from './Priority';

export class Tasks
{
    private _tasks : Array<Task>;
    private idCounter : number = 0;
    
    constructor()
    {
        this.tasks = new Array<Task>();
    }
    
    /**
    * Obtener lista de tareas.
    * @return {Task[}} The list of tasks.
    */
    get tasks() : Array<Task>
    {
        return this._tasks;
    }
    
    /**
    * Establecer lista de tareas.
    * @param {Task[]} tasks - Nueva Lista de Tareas.
    */
    set tasks(tasks : Array<Task>)
    { 
        this._tasks = tasks;
    }
    
    /**
    * Obtener la cantidad de tareas.
    * @return {number} Cantidad total de tareas.
    */
    get size() : number
    {
        return this.tasks.length;
    }
    
    /**
    * Añadir una tarea nueva a la lista.
    * @param {string} description - Descripcion
    * @param {string} priority - Prioridad
    * @param {Date} date - Fecha
    */
    addTask(description : string, priority : Priority, date : Date)
    {
        let newTask = new Task(0, description, priority, date);
        
        newTask.id = this.idCounter++;
        
        this.tasks.push(newTask);
    }
    
    /**
    * Obtener una tarea por id.
    * @param {number} id - Id
    * @return {Task} Tarea correspondiente al id obtenido.
    */
    getTask(id : number) : Task
    {
        for (let task of this.tasks)
        {
            if (task.id == id) return task;
        }
        
        throw new Error("Task not found with id: " + id);
    }
    
    getTasksByPriority(priority : Priority) : Array<Task>
    {
        let tasklist = new Array<Task>();
        
        for (let task of this.tasks)
        {
            if (task.priority == priority) tasklist.push(task);
        }
        
        return tasklist;
    }
    
    removeTaskById(id : number)
    {
        let index = this.tasks.indexOf(this.getTask(id), 0);
        
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
