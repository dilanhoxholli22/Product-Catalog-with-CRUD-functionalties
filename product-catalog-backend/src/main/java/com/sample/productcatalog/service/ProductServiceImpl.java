package com.sample.productcatalog.service;

import com.sample.productcatalog.domain.Product;
import com.sample.productcatalog.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(long id){
        return productRepository.findById(id);
    }

    @Override
    public void UpdateProduct(Product productObj, long id){
        Product product = productRepository.getById(id);
        product.setCode(productObj.getCode());
        product.setDescription(productObj.getDescription());
        product.setPrice(productObj.getPrice());
        product.setDetailed_description(productObj.getDetailed_description());
        productRepository.save(product);
    }

    @Override
    public void DeleteProduct(long id){
        productRepository.deleteById(id);
    }
}
