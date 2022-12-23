import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {



  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password:new FormControl('',[Validators.email,Validators.required])
  })
  



  constructor( private service:MobileService) { }
 
  
}
