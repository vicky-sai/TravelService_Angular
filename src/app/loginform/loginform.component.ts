import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user: Credential = {userName:'', passWord:''};
  status: string;

  constructor() { }

  ngOnInit() {
  }
  
  validate() {
    if(this.user.userName==='India' && this.user.passWord==='India')
      this.status = 'Valid..!';
    else
      this.status = 'Invalid..!';
  }
}
