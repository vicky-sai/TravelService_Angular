import { Component } from '@angular/core';
import { NavigatonLinks } from './navigaton-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vicky';
  subHeading = 'Tokyo tourism guide';

  //links = ['Plans', 'Pricing', 'Tourism','Contact Us'];
  links : NavigatonLinks[] = [
    {text:'Plans',link:'/search'},
    {text:'Pricing',link:'/show'},
    {text:'Tourism',link:'/tourism.html'},
    {text:'Contact Us',link:'/contactUs.html'},
  ];
}
