import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Task } from '../model/Task';
import { Tasks } from '../model/Tasks';
import { TaskService } from '../task.service';
import { Priority } from '../model/Priority';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit
{
  taskDescription = "";
  taskPriority = "Green";
    
  // Hack to show enum
  Priority = Priority;

  constructor(private taskService : TaskService, private router : Router) { }

  ngOnInit() {
  }
    
  addTask() : void
  {
      let priority;
      
      switch(this.taskPriority)
      {
          case "Green":
              priority = Priority.Green;
          break;
          
          case "Yellow":
              priority = Priority.Yellow;
          break;
           
          case "Red":
              priority = Priority.Red;
          break;
              
          default:
              priority = Priority.Green;
          break;
      }
      
      this.taskService.tasks.addTask(this.taskDescription, priority, new Date());
      this.taskDescription = "";
      this.taskPriority = "Green";
      
      this.router.navigate(['tasks']);
  }

}
