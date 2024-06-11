import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
interface ProductType{
  title?: string,
  price?: number,
  description?: string,
  image?: string,
  category?: string
}
@Component({
  selector: 'add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  product:ProductType = {};
  categories:string[] = [];
  categoriesEndPoint:string = "products/categories"
  addProductEndPoint:string = "https://fakestoreapi.com/products"
  constructor(private httpService:HttpService){

  }

  ngOnInit(): void {
    this.httpService.httpGet<string[]>(environment.apiUrl + this.categoriesEndPoint).subscribe(items=>{
      this.categories.push(...items)
    })
    
  }

  public addNewProduct(){
    this.httpService.httpPost<ProductType>(this.addProductEndPoint, {
      title: 'Manoj product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).subscribe(product=>{
      this.product = product
    })
  }




}
