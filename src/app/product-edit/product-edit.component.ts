// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-edit',
//   standalone: true,
//   imports: [],
//   templateUrl: './product-edit.component.html',
//   styleUrl: './product-edit.component.css'
// })
// export class ProductEditComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: any ;
  product: any = {}; // Assurez-vous de définir le bon type pour votre produit
  public successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID du produit depuis l'URL
    this.getProductDetails();
  }

  getProductDetails() {
    this.produitService.getProductById(this.productId).subscribe(
      (data: any) => {
        this.product = data; // Stocker les détails du produit récupéré
      });
  }

  updateProduct() {
    if (confirm('Êtes-vous sûr de vouloir modifier ce produit ?')) {
        this.produitService.updateProduct(this.productId, this.product).subscribe(() => {
          this.successMessage = 'Product updated successfully.';
              setTimeout(() => {
                this.successMessage = '';
                this.router.navigate(['/products']);
              }, 3000); // Rediriger après 3 secondes
        }, error => {
          console.error('Erreur lors de la mise à jour du produit :', error);
          // Gérer l'erreur
        });
    }
  }


}
