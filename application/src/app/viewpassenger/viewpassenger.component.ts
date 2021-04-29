import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger';
import { FlightService } from '../flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpassenger',
  templateUrl: './viewpassenger.component.html',
  styleUrls: ['./viewpassenger.component.css']
})
export class ViewpassengerComponent implements OnInit {
  passengers: Passenger[] ;
  msg: any;
  bookId: any;
  constructor(private flightservice: FlightService, private router: Router, private route: ActivatedRoute) {
    this.passengers = [];
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let bookId:any = params.get("bid"); console.log(bookId);
      this.flightservice.viewPassenger(bookId).subscribe(data => { this.passengers = data; console.log(this.passengers); this.msg = undefined },
        error => { console.log(error); this.msg = error.error.message; console.log(this.msg); });
    });
  }
  goToBooking() {
    this.router.navigateByUrl("/viewbooking");
  }

}
