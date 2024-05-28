import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  postSubscription!:Subscription;
  isLoaded:boolean = false;
  // productId:object={};
  endPoint:string ="https://fakestoreapi.com/products/";
  productData:any = {}
  constructor(private route:ActivatedRoute, private httpService:HttpService){
  }



  ngOnInit(): void {
    this.getProductDetail(this.route.snapshot.paramMap.get('id'));
  }

  getProductDetail(id:any){
    if(id){
      this.isLoaded = true;
      this.postSubscription = this.httpService.httpGet(this.endPoint + id).subscribe((data)=>{
        this.productData = data
        this.isLoaded = false;
      })
      console.log("executed")
    }
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe()
  }

}
