import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(
    private http:HttpClient
  ) { }

  messageAlert(){
    alert("Thanks for subscribe.")
  }

  // space=[
  //   {name: "Macbook Air", id:"01"},
  //   {name: "Macbook Pro", id:"02"},
  //   {name: "Macbook iPad", id:"03"},
  //   {name: "Iphone", id:"04"}
  // ];

  space(): Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

}
