import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number = 0;
  product: Product ={
    id: 0,
    code: "",
    description: "",
    price: 0,
    detailed_description: ""
  };

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.productDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}

