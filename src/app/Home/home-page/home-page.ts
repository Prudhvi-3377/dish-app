import { Component,OnInit } from '@angular/core';
import { Dish } from '../../Model/Dish';
import {GetDish} from '../../Services/get-dish';
import {Router} from '@angular/router';
import { DeleteDish } from '../../Services/delete-dish';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
   dishes!: Dish[]
   isAdmin:boolean = false;
  constructor(private getDish: GetDish, private router: Router, private deleteDish: DeleteDish, private authService:AuthService) { 
    // Initialize dishes to an empty array
    this.dishes = [];
    

  }
ngOnInit() {
  const isAdmin:boolean=this.authService.getToken('role') === 'ADMIN'?true:false;
  this.isAdmin = isAdmin;
  this.getDish.getDish().subscribe({
  next: (data: Dish[]) => {
    this.dishes = data;
  },
  error: (error) => {
    console.error('Error fetching dishes:', error);
  },
  
 })
}
logOut() {
  this.authService.clearToken();
  alert('You have been logged out successfully.');
  this.router.navigate(['']);
}
addNewDish()
{
  this.router.navigate(['/Add']);
}
edit(dish: Dish)
{
  this.router.navigate(['/Edit', dish.id]);
}
delete(dish: Dish)
{
  if(confirm(`Are you sure you want to delete ${dish.name}?`))
  {
    this.deleteDish.deleteDish(dish.id).subscribe({
      next: (response) => {
       alert('Dish deleted successfully:'+ response); 
       this.dishes = this.dishes.filter(d => d.id !== dish.id);           
      },
      error: (error) => {
        console.error('Error deleting dish:', error);
      }
    });
  }
}
}
