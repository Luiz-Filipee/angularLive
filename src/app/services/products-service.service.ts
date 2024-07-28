import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchData(search: string): Observable<any>{
    const options = {
      params: new HttpParams().set('s', search),
      headers: new HttpHeaders({
        'sdasd': '',
        'asdad': ''
      })
    }
    return this.httpClient.get(this.apiUrl, options);
  }


}
