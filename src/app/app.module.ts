import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MobileService } from './mobile.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DetailviewComponent } from './detailview/detailview.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailviewComponent,
    EmployeelistComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
