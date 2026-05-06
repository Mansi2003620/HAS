import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent {
  admin = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
   
    if (this.admin.email === 'admin@gmail.com' && this.admin.password === 'admin123') {
      
      localStorage.setItem('isAdminLoggedIn', 'true');
      alert('Login successful!');
      
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
