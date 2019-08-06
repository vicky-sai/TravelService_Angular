import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import 
import { Tours } from '../tours';
import { TourService } from '../tour.service';
@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {

  @Input() srchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
  tourList: Tours[];
  constructor(private service:TourService) { }

  
  ngOnInit() {
  }
  send() {
    console.log('sent');

    this.service.findAll().subscribe(resp=>this.tourList = resp);
    if(this.srchCity==='Chennai') {
      this.operator.emit('Chennai guy - 7886204845');
    } else {
    this.operator.emit('Someone else - 9524889635');
    }
  }

}
