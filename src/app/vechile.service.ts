import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Vechile}  from './models/vechile.model';
import {Observable}  from 'rxjs/observable'

@Injectable({
  providedIn: 'root'
})
export class VechileService {
  private serviceUrl = "http://localhost:8000/vechiles";
  constructor(private http : HttpClient ) { }

getVehiles(): Observable<Vechile[]>
{
  return this.http.get<Vechile[]>(this.serviceUrl);
}

}
