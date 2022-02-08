package com.sample.productcatalog.controller;

import com.sample.productcatalog.domain.Product;
import com.sample.productcatalog.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/save")
    public ResponseEntity<?> saveProduct(@RequestBody Product product){
        try{
            productService.saveProduct(product);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<Product>> getAllProducts(){
        try {
            return new ResponseEntity<>(productService.getAllProducts(),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/getById/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable("id") long id){
        try {
            return new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/;/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable("id") long id, @RequestBody Product product){
        try{
            productService.UpdateProduct(product,id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/deleteProduct/{id}")
    public ResponseEntity<?> DeleteProduct(@PathVariable("id") long id){
        try{
            productService.DeleteProduct(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
