package com.sample.productcatalog.service;

import com.sample.productcatalog.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    void saveProduct(Product product);

    List<Product> getAllProducts();

    Optional<Product> getProductById(long id);

    void UpdateProduct(Product productObj, long id);

    void DeleteProduct(long id);
}
