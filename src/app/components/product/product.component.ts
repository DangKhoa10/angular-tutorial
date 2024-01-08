import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product: any;

  constructor(private productService: ProductService) {}

   ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: any) => {
      this.product = res.data;
    });
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}


