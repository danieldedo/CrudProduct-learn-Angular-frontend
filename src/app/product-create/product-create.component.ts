import { ProduitService } from '../services/produit.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent  implements OnInit{

  public product: Product = new Product();
  public successMessage: string = '';

  constructor(private produitService: ProduitService, private router: Router) {}



  ngOnInit(): void {
    console.log(this.product);
  }

  createProduct(productForm: NgForm): void {
    if(productForm.valid) {
      console.log("coco")
      this.produitService.createProduct(this.product).subscribe({
        next: (response: any) => {
          this.successMessage = 'Product created successfully.';
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['/products']);
          }, 3000); // Rediriger après 3 secondes
        },
        error:(err: any) => {
        console.log('Error creating product:', err);
        }
      })
    }

    // console.log("ça c'est productForm.value==>",productForm.value);
    // console.log("ça est product.value==>", this.product);



    // this.produitService.createProduct(this.productData).subscribe( response => {

    //     console.log('Product created successfully:', response);

    //     this.router.navigate(['/products']);
    //   },
    //   error => {
    //     // Gérer les erreurs, par exemple : afficher un message d'erreur
    //     console.error('Error creating product:', error);
    //   };
    // throw new Error('Method not implemented.');
  }



}
