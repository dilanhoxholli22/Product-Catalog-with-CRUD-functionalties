import { Product } from "../../model/Product";
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchText :any;
  popTitle :string ="Are you sure";
  popMessage :string ="Please Confirm"
  CancelClicked : boolean =false


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.productService.getProductList().subscribe((responce)=>
    this.products=responce)
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }

  editProduct(id:number){
    this.router.navigate(['edit',id]);
    this.productService.updateProduct
  }

  saveProduct(){
    this.router.navigate(['save']);
  }
  // Search(){
  //   if(this.code=""){
  //     this.ngOnInit();
  //   }else{
  //     console.log("heel")
  //     this.products=this.products.filter(res=>{
  //       console.log("s")

  //       return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
  //     })
  //   }
  // }

  key:string="code";
  reverse:boolean=false;

  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
