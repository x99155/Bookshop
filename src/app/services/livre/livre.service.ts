import { Injectable } from '@angular/core';
import { Ilivres } from '../../models/livre.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService { // c'est cette classe service qui va se connecte au backend

  constructor(private http:HttpClient) { }

    /**
   * Récupère tous les livres depuis la base de données.
   * 
   * Cette méthode effectue une requête HTTP GET pour récupérer
   * un tableau d'objets `Ilivres` à partir de l'API.
   * 
   * @returns Un Observable contenant un flux de données sous la forme d'un tableau de `Ilivres`.
   */
  getAllLivre(): Observable<Ilivres[]> {
    // Effectue une requête HTTP GET pour obtenir les livres depuis l'API ('api/livres').
    return this.http.get<Ilivres[]>('api/livres').pipe(
      // Le pipe permet de transformer ou manipuler les données de l'Observable.
      map(livre => livre) // Ici, map est utilisé pour simplement retourner les données telles quelles.
    );
  }

  /**
   * Récupère les livres filtrés par catégorie.
   * 
   * Cette méthode utilise la méthode `getAllLivre()` pour récupérer tous les livres,
   * puis filtre le tableau pour ne conserver que les livres appartenant à la catégorie spécifiée.
   * 
   * @param category - Le nom de la catégorie pour filtrer les livres.
   * @returns Un Observable contenant un tableau de `Ilivres` filtré par catégorie.
   */
  getLivreByCategory(category: string): Observable<Ilivres[]> {
    // On récupère tous les livres via `getAllLivre()` et on applique un filtre sur la catégorie.
    return this.getAllLivre().pipe(
      // Utilise map pour transformer le flux de données en ne gardant que les livres correspondant à la catégorie spécifiée.
      map(x => x.filter(p => p.category == category)) // Filtre les livres selon leur catégorie.
    );
  }

  getLivreById(id: number): Observable<Ilivres> {

    // return this.getAllLivre().pipe(
    //   map(x => x.find(p => p.id == id))
    // );

    return this.getAllLivre().pipe(
      map( livres => {
        return livres.find(p => p.id == id) as Ilivres
      })
    );
  }

  AjouterLivre(livre:Ilivres)
   {
     return this.http.post('api/livres', livre);
   }

}
