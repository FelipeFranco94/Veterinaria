import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorInicio = false;
  hide = true;
  value = '';
  email = '';
  password = '';
  constructor(public userService: UsersService, public router: Router) { }


  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      });
  }
}

