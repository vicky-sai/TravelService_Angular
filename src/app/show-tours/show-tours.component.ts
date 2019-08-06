import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Subscriber } from 'rxjs';
import { Tours } from '../tours';

@Component({
  selector: 'app-show-tours',
  templateUrl: './show-tours.component.html',
  styleUrls: ['./show-tours.component.css']
})
export class ShowToursComponent implements OnInit {

  tourList:Tours[];
  constructor(private service:TourService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp=>this.tourList = resp);
  }

}
