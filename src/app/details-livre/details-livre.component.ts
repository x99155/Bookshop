import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrl: './details-livre.component.css'
})
export class DetailsLivreComponent {
  // on récupère l'id du livre qui sera envoyé (localhos:4200/livre/1), l'id dans l'url c'est 1 et c'est lui qu'on récupère ici
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let id = this.route.snapshot.paramMap.get('id');

    console.log(id);
  }
}
