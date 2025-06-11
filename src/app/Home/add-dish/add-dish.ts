import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dish } from '../../Model/Dish';
import { AddingDish } from '../../Services/adding-dish';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-add-dish',
  standalone: false,
  templateUrl: './add-dish.html',
  styleUrl: './add-dish.css'
})
export class AddDish implements OnInit {
  formData!:FormGroup;
  dish!: Dish;
  constructor(private route:Router, private adddish: AddingDish,private router:Router, private authService:AuthService) {}


  ngOnInit() {
    this.formData=new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      quantity: new FormControl('', [Validators.min(1)]),
  });
}
logOut() {
  this.authService.clearToken();
  alert('You have been logged out successfully.');
  this.router.navigate(['']);
}
onSubmit() {
  if (this.formData.valid) {
    this.dish=
    {
      id: 0,
      name: this.formData.value.name,
      description: this.formData.value.description,
      quantity: this.formData.value.quantity
    }
    this.adddish.getDish(this.dish).subscribe({
      next: (data) => {
        alert(data);
        this.route.navigate(['/Home']);
      },
      error: (error) => {
        console.error('Error adding dish:', error);
      }
    });

    
  } else {
    console.log('Form is invalid');
  }
  
}


  BacktoHome()
  {
this.route.navigate(['/Home']);
  }
}
