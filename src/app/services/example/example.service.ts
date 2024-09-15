import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExample } from '../../models/example.model';

@Injectable({
  providedIn: 'root'
})

/**
 *  Dans Angular, il est courant que toutes les méthodes d'un service qui se connecte au 
   backend retournent des Observable. Cela s'inscrit dans le cadre de l'architecture 
   réactive d'Angular, où les Observable permettent de gérer des flux de données 
   asynchrones, tels que les appels HTTP.

 * Lorsque tu utilises HttpClient pour effectuer des requêtes vers un backend, 
  les méthodes comme get, post, put, et delete retournent des Observable. Cela te 
  permet de souscrire à ces flux et de recevoir les données ou gérer les erreurs lorsqu'elles sont disponibles.
 */

export class ExampleService {

  private apiUrl = 'http://localhost:3000/api/example'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les livres
  getAllLivre(): Observable<IExample[]> {
    return this.http.get<IExample[]>(this.apiUrl);
  }

  // Récupérer un livre par son id
  getLivreById(id: number): Observable<IExample> {
    return this.http.get<IExample>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau livre
  addLivre(livre: IExample): Observable<IExample> {
    return this.http.post<IExample>(this.apiUrl, livre);
  }

  // Mettre à jour un livre
  updateLivre(livre: IExample): Observable<IExample> {
    return this.http.put<IExample>(`${this.apiUrl}/${livre.id}`, livre);
  }

  // Supprimer un livre
  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
