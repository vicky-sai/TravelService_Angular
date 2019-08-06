import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tours } from './tours';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<Tours[]> {
    return this.http.get<Tours[]>("http://localhost:3000/colours");
  }
}
