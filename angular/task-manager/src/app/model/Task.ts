import { Priority } from './Priority';

export class Task
{
    private _id : number;
    private _description : string;
    private _priority : Priority;
    private _date : Date;
    
    constructor(id : number = -1, description : string = "A new task." , priority : Priority = Priority.Green, date : Date = new Date())
    {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }
    
    /**
    * Obtener el id de la tarea
    * @return {number} Id
    */
    get id() : number
    {
        return this._id;        
    }
    
    /**
    * Establecer id a la tarea
    * @param {string} id - Nuevo Id
    */
    set id(id : number)
    {
        if (typeof id === 'undefined')
        {
            throw new Error("Id erroneo");
        }
        
        this._id = id;
    }
    
    /**
    * Obtener la descripcion de la tarea
    * @return {string} Descripcion de la tarea
    */
    get description() : string 
    {
        return this._description;
    }
    
    /**
    * Establecer descripcion a la tarea
    * @param {string} description - Nueva descripcion
    */
    set description(description : string)
    {
        this._description = description;
    }
    
    /**
    * Obtener la prioridad de la tarea
    * @return {Priority} Prioridad de la tarea
    */
    get priority() : Priority
    {
        return this._priority;
    }
    
    /**
    * Establecer la nueva prioridad de la tarea
    * @param {Priority} priority - Prioridad nueva
    */
    set priority(priority : Priority)
    {
        this._priority = priority;
    }
    
    /**
    * Obtener la fecha de la creacion de la tarea
    * @return {Date} Fecha
    */
    get date() : Date
    {
        return this._date;
    }
    
    /**
    * Establecer la fecha de creacion de la nueva tarea
    * @param {Date} date - Fecha de la nueva creacion de la tarea
    */
    set date(date : Date)
    {
        this._date = date;
    }
}