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

  lyears=[
    {year: "2006"},
    {year: "2007"},
    {year: "2008"},
    {year: "2009"},
    {year: "2010"},
    {year: "2011"},
    {year: "2012"},
    {year: "2013"},
    {year: "2014"},
    {year: "2015"},
    {year: "2016"},
    {year: "2017"},
    {year: "2018"},
    {year: "2019"},
    {year: "2020"}
  ]

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
