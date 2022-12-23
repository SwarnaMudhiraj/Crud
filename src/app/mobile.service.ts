import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Imobolie } from './mobilesInterface';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  // employe: Imobolie[] | undefined
  

  constructor(private http: HttpClient) { }
  

 
  private url1 = 'https://42ce-43-252-204-177.in.ngrok.io/'
  private url = 'assets/data/mobilesapi.json'
  private ur2='https://3e04-183-82-122-219.in.ngrok.io/users'


  
  // read2() {
  //   return this.http.get(this.url)
  // }
  
  // fetchMobiles(): Observable<Imobolie[]> {
    
  //   return this.http.get<Imobolie[]>(this.url);
    
  // }

  read() {
    let myheaders = new HttpHeaders({ "key1": "001" })
    myheaders = myheaders.set("name", "swarna");
    let myParams = new HttpParams();
    myParams = myParams.set("key2", "0022");
    myParams = myParams.set("name", "002");

    return this.http.get(this.url, { headers: myheaders , params:myParams})
    
  }
  readbyId(id:any) {
    return this.http.get(this.url+"/"+id)
  }

  delete(id: any) {
    
    return this.http.delete(this.url+"/"+id)
    
  }

  edit(objbody: any,id:any) {
    console.log(this.url, objbody)
    return this.http.put(this.url+"/"+id,objbody);
    }

  add(objbody: any) {
       console.log(objbody)
     return this.http.post(this.url, objbody)
    
  }
  
  loginUser(employe:any) {
    
  }


}
