import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Car{
  id: string,
  name: string,
  model: string,
  year: string
}

@Injectable({
  providedIn: 'root'
})
export class CrudExemploService {

  private apiUrl = 'http://localhost:8080/cars'
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCars(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  createCar(car: Car): Observable<Car>{
    return this.httpClient.post<Car>(this.apiUrl, car);
  }

}
