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
  
  livres: Ilivres[] = []; // Tableau contenant la liste des livres récupérés
  listCategories: string[] = []; // Tableau des catégories disponibles pour filtrer les livres
  categoryId: string = 'all'; // Identifiant de la catégorie sélectionnée (par défaut "all")

  // Injection de dépendance des services LivreService et CategoryService
  constructor(private serviceLivre:LivreService, private serviceCategory:CategoryService) {}

  /**
   * Méthode appelée à l'initialisation du composant (lorsque le composant est chargé).
   * Elle récupère tous les livres et toutes les catégories.
   */
  ngOnInit(): void {
    this.getAllLivres();
    this.listCategories = this.serviceCategory.getAllCategory();
  }

  changeCategory(): void {
    if (this.categoryId == "all") {
      // Si "all" est sélectionné, afficher tous les livres
      this.getAllLivres();
    } else {
      // Sinon, filtrer les livres par catégorie
      this.serviceLivre.getLivreByCategory(this.categoryId).subscribe(
        ls => {this.livres = ls}
      );
    }
  }

  onNotify(event: number): void {
    alert(event);
  }

  private getAllLivres() {
    return this.serviceLivre.getAllLivre()
    .subscribe(listLivres => {this.livres = listLivres});
  }
  

}
