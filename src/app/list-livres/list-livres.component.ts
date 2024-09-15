import { Component } from '@angular/core';
import { Ilivres } from '../models/livre.model';
import { LivreService } from '../services/livre/livre.service';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrl: './list-livres.component.css'
})
export class ListLivresComponent {


  title: string = "Listes des livres";
  widthImg: number = 50;
  heightImg: number = 50;
  affichage: boolean = true;
  livres: Ilivres[] = [];
  listCategories: string[] = [];
  categoryId: string = 'all'; // Valeur par défaut
  livresTemp: Ilivres[] = [...this.livres]; // Initialiser livresTemp avec la liste complète des livres

  constructor(private serviceLivre:LivreService, private serviceCategory:CategoryService) {}

  ngOnInit(): void {
    this.livres = this.serviceLivre.getAllLivre();
    this.listCategories = this.serviceCategory.getAllCategory();
    this.livresTemp = this.livres;
  }

  changeCategory(): void {
    if (this.categoryId == "all") {
      // Si "all" est sélectionné, afficher tous les livres
      this.livres = this.livresTemp;
    } else {
      // Sinon, filtrer les livres par catégorie
      this.livres = this.livresTemp.filter(livre => livre.category == this.categoryId);
    }
  }

  onNotify(event: number): void {
    alert(event);
  }
  

}
