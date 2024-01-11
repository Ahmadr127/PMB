import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  username: string = '';
  password: string = '';

  login(){
    if (this.username ==='admin'&& this.password==='admin') {
      this.router.navigateByUrl('/tabs');
    }
    else if (this.username ==='admin'&& this.password==='admin') {
      this.router.navigateByUrl('/tabs');
    }
  }
}
