import { Component , OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { LoginRequest } from '../../Model/login-request-model';
import {LoginService} from '../../Services/login-service';
import { LoginResponse } from '../../Model/login-response-model';
import { AuthService } from '../../Services/auth-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  constructor(private loginService:LoginService, private authService:AuthService,private route:Router) { }
  loginForm!: FormGroup;
  ngOnInit(){
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

onSubmit() {
    if (this.loginForm.valid) {
      const loginreqData: LoginRequest= this.loginForm.value; 
      var loginResponse:Observable<LoginResponse> = this.loginService.login(loginreqData);
      loginResponse.subscribe({
        next: (response) => {
          this.authService.setToken(response.token,response.role);
          
          alert('Login successful');
          this.route.navigate(['/Home']); 
        },
        error: (error) => {
          if (error.status === 401) {
            alert('Invalid username or password');
          } else if (error.status >= 500) {
            alert('Server error, please try again later');
          }
          
        }
      });
      

    } else {
      alert('Please fill in all required fields correctly.');
    }
    
  }
  
}
