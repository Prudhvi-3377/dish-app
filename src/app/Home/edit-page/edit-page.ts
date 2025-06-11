import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetOneDish } from '../../Services/get-one-dish';
import { Dish } from '../../Model/Dish';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateDish } from '../../Services/update-dish';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css'
})
export class EditPage implements OnInit {
  

  constructor(private http:HttpClient, private routeid:ActivatedRoute,private route:Router,private getID: GetOneDish, private update: UpdateDish, private authService:AuthService) {}
  dish!: Dish;
  formData!:FormGroup;
  ngOnInit() {
    const id = this.routeid.snapshot.paramMap.get('id');
    if(id)
    {
       this.getID.getDish(id).subscribe(
        {
          next:(data:Dish) => 
            {
              this.dish = data;
              
      this.formData = new FormGroup({
        id: new FormControl(this.dish.id),
        name: new FormControl(this.dish.name),
        description: new FormControl(this.dish.description),
        quantity: new FormControl(this.dish.quantity)
      });

            },
          error: (error) => 
            {
              console.error('Error fetching dish:', error);
            }

        });

       
    }

    
  }
  logOut() {
  this.authService.clearToken();
  alert('You have been logged out successfully.');
  this.route.navigate(['']);
}
  onSubmit()
  {
    if(this.formData.value.name===this.dish.name && this.formData.value.description===this.dish.description && this.formData.value.quantity===this.dish.quantity)
    {
      alert("No changes made to the dish.");
      this.BacktoHome();
      return;
    }
    if(this.formData.invalid)
    {
      alert("Please fill all the fields.");
      return;
    }
    
    this.update.updateDish(this.formData.value).subscribe({
  next: (data) => {
    alert(data);
    this.route.navigate(['/Home']); 
    ;
    
  },
  error: (error) => {
    console.error('Error updating dish:', error);
  }
});

  }

  BacktoHome(){
    this.route.navigate(['/Home']);
  }

}
