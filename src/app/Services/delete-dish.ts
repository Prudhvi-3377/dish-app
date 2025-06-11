import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environmentUrls} from '../Environment/env-variables';
@Injectable({
  providedIn: 'root'
})
export class DeleteDish {

  constructor(private http:HttpClient) { }
  deleteDish(id: number) {
    var url=environmentUrls.Url.deleteDish + id
   return  this.http.delete(url, { responseType: 'text' });
  }
}
