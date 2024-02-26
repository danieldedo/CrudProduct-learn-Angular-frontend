import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_PRODUIT = "/produits"

  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get(this.API_URL + this.ENDPOINT_PRODUIT);
  }

  getProductById(productId: number): any {
    return this.http.get(this.API_URL + this.ENDPOINT_PRODUIT + "/" + productId);
  }

  createProduct(product: Product): any {
    return this.http.post(this.API_URL + this.ENDPOINT_PRODUIT, product);
  }

  deleteProduct(productId: number): any{
    return this.http.delete(this.API_URL + this.ENDPOINT_PRODUIT+ "/" +productId);
  }

  updateProduct(productId: number, updatedProduct: Product) {
    return this.http.put(this.API_URL + this.ENDPOINT_PRODUIT + "/" + productId, updatedProduct);
  }

}

