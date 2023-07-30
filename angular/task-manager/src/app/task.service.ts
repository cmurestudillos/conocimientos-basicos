import { Injectable } from '@angular/core';
import { Tasks } from './model/Tasks';

@Injectable()
export class TaskService
{
  tasks = new Tasks();
    
  constructor() { }

}
