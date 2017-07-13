import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  maxDate: any;
  constructor(){}

  ngOnInit(){
    
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() -1 );
    console.log(this.maxDate);
  }

}

