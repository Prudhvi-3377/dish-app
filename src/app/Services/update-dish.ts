import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../Model/Dish';
import { environmentUrls } from '../Environment/env-variables';
@Injectable({
  providedIn: 'root'
})
export class UpdateDish {

  constructor(private http:HttpClient) { }
  updateDish(dish:Dish)
  {
    return this.http.put(environmentUrls.Url.updateDish, dish, { responseType: 'text' })
  }
}
