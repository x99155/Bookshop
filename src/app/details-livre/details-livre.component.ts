import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../services/livre/livre.service';
import { Ilivres } from '../models/livre.model';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrl: './details-livre.component.css'
})
export class DetailsLivreComponent {
  // on récupère l'id du livre qui sera envoyé (localhos:4200/livre/1), l'id dans l'url c'est 1 et c'est lui qu'on récupère ici
  constructor(private route:ActivatedRoute, private serviceLivre:LivreService) {}

  //Méthode 1: livre: Ilivres | undefined;
  livre$: Observable<Ilivres> = EMPTY; // Méthode 2: avec pipe async

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    // Methode 1
    // this.serviceLivre.getLivreById(Number(id)).subscribe(
    //   livr => {
    //     this.livre = livr;
    //     //console.log(this.livre)
    //   }
    // );

    this.livre$ = this.serviceLivre.getLivreById(Number(id)); // methode 2: avec pipe async
  }
}
