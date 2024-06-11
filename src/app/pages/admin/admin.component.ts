import { Component } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'admin',
  standalone: true,
  imports: [AddProductComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
