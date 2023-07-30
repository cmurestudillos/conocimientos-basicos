import { AppResolveService } from './services/app.resolve.service';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
// import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component:  HomeComponent, pathMatch: 'full'},
  { path: '', component:  UsersComponent, pathMatch: 'full'},
  { path: 'usuarios', component:  UsersComponent, data: {url: 'users'}, resolve: {data: AppResolveService}},
  { path: 'usuario/:id', component: UserComponent, data: {url: 'users'}, resolve: {data: AppResolveService}},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [AppResolveService]
})
export class AppModuleRouting {}

