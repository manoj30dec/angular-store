import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ProductModel } from '../../models/products.models';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit, OnDestroy {
  postSubscription!:Subscription;
  constructor(private httpService:HttpService ){
  }
  isLoaded:boolean = false;
  allProducts:any = []
  productEndPoint:string="https://fakestoreapi.com/products?limit=12"
  // productEndPoint:string="https://dummyjson.com/products";
  // productEndPoint:string="https://api.escuelajs.co/api/v1/products";
  
  getAllProducts(){
    this.isLoaded = true;
    this.postSubscription = this.httpService.httpGet(this.productEndPoint).subscribe((data)=>{
      this.allProducts = data
      this.isLoaded = false;
    })
  }
  ngOnInit(): void {
    this.getAllProducts()
    // console.log(this.allProducts)
  }
  ngOnDestroy(): void {
    this.postSubscription && this.postSubscription.unsubscribe();
  }
  
}
