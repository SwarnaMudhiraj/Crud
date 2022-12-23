import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'list', component: EmployeelistComponent },
   // { path: 'detailview', component: DetailviewComponent },
  { path: 'list/:id', component: DetailviewComponent },
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
