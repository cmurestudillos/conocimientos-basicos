import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

const routes : Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path : 'tasks', component : TasksComponent },
    { path : 'task', component : TaskComponent }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule 
{
    
}
