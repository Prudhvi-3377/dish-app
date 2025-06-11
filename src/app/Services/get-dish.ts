import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmentUrls} from '../Environment/env-variables';
import { Dish } from '../Model/Dish';

@Injectable({
  providedIn: 'root'
})
export class GetDish {

  constructor(private http: HttpClient) { }

  getDish() {
    return this.http.get<Dish[]>(environmentUrls.Url.getAllDishes); 
  }


}
