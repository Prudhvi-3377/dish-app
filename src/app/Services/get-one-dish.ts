import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentUrls } from '../Environment/env-variables';
import { Dish } from '../Model/Dish';

@Injectable({
  providedIn: 'root'
})
export class GetOneDish {

  constructor(private http:HttpClient) { }
  getDish(id: string) {
   var url= environmentUrls.Url.getDishById+id
   return this.http.get<Dish>(url); 
  }
}
