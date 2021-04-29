import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../scheduled-flight';
import { Flight } from '../flight';
import { Airport } from '../airport';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-view-scheduledflight',
  templateUrl: './view-scheduledflight.component.html',
  styleUrls: ['./view-scheduledflight.component.css']
})
export class ViewScheduledflightComponent implements OnInit {
  schedule:any=[];
  flights:Flight[];
  airports:Airport[];
  src:any;
  dest:any;
  doj:Date;
  msg:any
  constructor( private flightservice:FlightService) { }

  ngOnInit() {
    this.flightservice.viewAirports().subscribe(data=>this.airports=data);
    
  }
  viewScheduledFlight(){
    this.flightservice.viewschedule(this.src,this.dest,this.doj).subscribe(data=>{this.schedule=data,
      this.msg=undefined},error=>{console.log(error);this.msg=error.error.message}
      );
      console.log(this.schedule);
  }
}
