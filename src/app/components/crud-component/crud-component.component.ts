import { Component, OnInit } from '@angular/core';
import { CrudExemploService, Car } from '../../services/crud-exemplo.service';

@Component({
  selector: 'app-crud-component',
  templateUrl: './crud-component.component.html',
  styleUrl: './crud-component.component.scss'
})
export class CrudComponentComponent implements OnInit{

  cars: Car[] = [];

  constructor(
    private crudExemploService: CrudExemploService
  ){ }

  ngOnInit(): void {
      this.crudExemploService.getAllCars().subscribe((data: Car[]) => {
        this.cars = data;
      })
  }

  onClick(){
    
  }

}
