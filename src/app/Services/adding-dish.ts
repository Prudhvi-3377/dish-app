import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentUrls } from '../Environment/env-variables';
import { Dish } from '../Model/Dish';

@Injectable({
  providedIn: 'root'
})
export class AddingDish {

  constructor(private http: HttpClient) { }

  getDish(dish:Dish) {
    return this.http.post(environmentUrls.Url.addDish,dish,{responseType:'text'} ); 
  }
}


