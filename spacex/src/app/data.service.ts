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

  spacex(): Observable<any>{
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

}
