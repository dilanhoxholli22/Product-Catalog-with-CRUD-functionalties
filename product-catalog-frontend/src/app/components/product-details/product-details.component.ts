import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number =0;
  product: Product = {
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
  list(){
    this.router.navigate(['products']);
  }
}
