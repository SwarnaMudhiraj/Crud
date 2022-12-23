import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  title = 'CRUDoperation';


  employees: any;
  // employees1: any =[ {
  //   id1:1,username1:"swarna",email1:"swrana@gmail.com",password_digest1:"swarna1234"
  // },{  id1:2,username1:"sandeep",email1:"sandee@gmail.com",password_digest1:"sandeep1234"}]

  showForm = false;
  deleteform = false;
  formHeader = "Add Employee"
  username: any = "";
  id: any
  email: any
  password_digest: any
  deleteid = "";



  
  constructor(private ms: MobileService,private router:Router) { }

  

show(){console.log("hiii",this.employees)}
  ngOnInit(): void {
          
    this.reademployes()
  }
  
 reademployes() {
   console.log("qrydfghj");
   console.log("hiiii")
    this.ms.read().subscribe((response: any) => {
      this.employees = response;
      console.log(this.employees);
      console.log("hiiii")})
    }
  
  showdetails(emp:any)
  {
    //  this.ms.read().subscribe((response: any) => {
    //   this.employees = response;
    //   console.log(this.employees);
    //   console.log("hiiii")})
    let data:any=this.employees
    this.router.navigate(['/list',emp.id],{queryParams:{data:JSON.stringify(data)}})
   }
  
  

  deleteEmployee(id2: any) {
    console.log(id2)
    this.ms.delete(id2).subscribe((res) => {
console.log(res)
     this.reademployes();
      

    })
  }
  no() {
    this.deleteform = false;
  }
  ok() {
    this.deleteEmployee(this.deleteid)
      this. deleteform =false
  }
  // deleteMeth(id2:any) {
  //     this.ms.delete(id2).subscribe((res)=>{this.reademployes()})
  //   }

  showdelete(id:any) {
    this.deleteid=id
    this.deleteform = true
  }

  openForm(response: any = null) {
    this.showForm = true;
    if (response) {
      this.username =response.username  
      this.email = response.email
      this.password_digest = response.password_digest
      this.id = response.id
      this.formHeader = "Edit Employee"
    }
    else {
      this.id = null
      this.formHeader = "Add Employee"
      this.clearForm()
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }
  
  clearForm() {
    this.username= null
    this.email = null
   
    this.password_digest = null
    
  }
  
  saveEmployee() {
    this.showForm = false;
    {
      let objbody = {
        "user": {
          "id": this.id,
          "username": this.username,
          "email": this.email,
          "password_digest": this.password_digest
        }
      }
    
      if (this.id) {
        objbody.user.id= this.id;
        this.ms.edit(objbody,this.id).subscribe((res) => {
          this.reademployes()
        })
      }
      else {
        this.ms.add(objbody).subscribe((res) => this.reademployes())
      }
    }

  }
}

