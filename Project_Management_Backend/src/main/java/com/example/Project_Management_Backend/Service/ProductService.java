package com.example.Project_Management_Backend.Service;

import com.example.Project_Management_Backend.Model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {
    //save product
    public Product saveProduct(Product product);

    //list product
    public List<Product> getAllProduct();

    //fetching product by id
    public Product getProductById(Integer id);

    public String deleteProduct(Integer id);

    public Product editProduct(Product product, Integer id);
}
