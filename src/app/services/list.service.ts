import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

const baseUrl = 'http://localhost:1337/api/list'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${baseUrl}/get-item`);
  }
  get(id: any): Observable<Item> {
    return this.http.get(`${baseUrl}/get-item?listItemId=${id}`)
  }
  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-item`, data);
  }
  update(id: any, data:any): Observable<any> {
    return this.http.post(`${baseUrl}/update-item?listItemId=${id}`, data);
  }
}
