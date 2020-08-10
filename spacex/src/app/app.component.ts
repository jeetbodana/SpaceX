import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  developerInfo = "Jitendra Bodana";

  ClickUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014';
  
  posts: any;
  

  constructor(
    private _dataService:DataService,
    private http: HttpClient
  ) {}
  // spacex={};
  
  spacex={};
  lyears={};
  ngOnInit() {
    this._dataService.space().subscribe(spacexData => this.spacex = spacexData);
    this.lyears = this._dataService.lyears;
  }

  btnClick(){
    alert('clicked year');
    this.posts = this.http.get(this.ClickUrl)
  }

}
