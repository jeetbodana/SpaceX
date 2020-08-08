import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  developerInfo = "Jitendra Bodana";
  

  constructor(private _dataService:DataService){}
  // spacex={};
  spacex={};
  ngOnInit() {
    // this.spacex = this._dataService.space;

    this._dataService.space().subscribe(spacexData => this.spacex = spacexData)

    // console.log(this.spacex);
  }

  btnClick(){
    this._dataService.messageAlert();
  }


}
