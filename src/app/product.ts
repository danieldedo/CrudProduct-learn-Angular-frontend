

export class Product {
  public name: string;
  public price: number | null;
  public quantity: number | null;
  public provider: string;
  // public categorie: string;
  // public description: string;
  // public date: Date;

  constructor() {
    this.name = "";
    this.price = null;
    this.quantity = null;
    this.provider = "";
    // this.quantite = 0;
    // this.categorie = "";
    // this.description = "";
    // this.fournisseur = "";
    // this.date = new Date(); // Initialisez la propriété date avec la date actuelle
  }
}
