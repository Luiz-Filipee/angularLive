import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsServiceService } from '../services/products-service.service';

interface Drink{
  id: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit {

  drinks$: Observable<Drink[]> = new Observable<Drink[]>();

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void{
    this.drinks$ = this.productsService.fetchData('lemon').pipe(
      map(response => {
        console.log(response);
        return response.drinks;
      })
    );
  }

  onClick(){
    // this.drinks$ = this.apiService.getDataFiltered('filtro').pipe(
    //   map(response => {
    //     return response.data.body.list;
    //   })
    // );
  } 

}
