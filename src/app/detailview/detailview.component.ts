import { Component, OnInit, ViewChild } from '@angular/core';
import { MobileService } from '../mobile.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})

export class DetailviewComponent implements OnInit {

  detailsform: empform = new empform();

  @ViewChild("empform")
  empform!: NgForm;
  isSubmitted: boolean = false;
  ids: any
  username: any = "";
  email: any
  password_digest: any;
  empdata:any


 


  constructor(private activated: ActivatedRoute ,private ms:MobileService) { }

  ngOnInit(): void {

    this.activated.paramMap.subscribe((params:Params) => {
      // let employees = (params.get('employees'));
      // this.emp = employees;
       let id = params['get']('id')
      this.ids = id;
      this.getEmployeeDetailsById()
      console.log(this.getEmployeeDetailsById())
    })
  }

  getEmployeeDetailsById1() {
    console.log("result")
    this.ms.readbyId(this.ids).subscribe((data: any) =>
    {
      console.log(this.ids)
      console.log("data")
      if (data != null && data.body != null) {
        var result = data.body;
 
        console.log(result)
        if (result) {
          this.ids = result.id;
          console.log(this.username)
          this.username = result.username;
          this.email = result.email;
          this.password_digest=result.password_digest
        }
      }
  }
    )
  }
  getEmployeeDetailsById() {
    this.ms.readbyId(this.ids).subscribe((response: any) => {
      this.empdata = response;
      console.log(this.empdata);
      console.log("hiihi")
    })
  }
  // 
//  reademployes() {
//    console.log("qrydfghj");
//    console.log("hiiii")
//     this.ms.read().subscribe((response: any) => {
//       this.employees = response;
//       console.log(this.employees);
//       console.log("hiiii")})
//     }

  // inlist() {
  //   this.emp = this.li.reademployes()
  //   console.log(this.emp
  //   )
  // }
}

export class empform{
   username: any = "";
  id: any
  email: any
  password_digest: any
  }
