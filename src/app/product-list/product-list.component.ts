import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: any;

  constructor(private produitService: ProduitService, private router: Router){}

  ngOnInit(): void {
    console.log('On Init...')
    this.loadProducts();
  }


  loadProducts(): void {
    this.produitService.getAllProduct().subscribe((data) => {
      this.products = data
    console.log(data)
    });
  }

  deleteProduct(productId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.produitService.deleteProduct(productId).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  editProduct(productId: string) {
    this.router.navigate(['/products/edit', productId]);
  }

}
