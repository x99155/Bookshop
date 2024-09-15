import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilivres } from '../models/livre.model';
import { CategoryService } from '../services/category/category.service';
import { LivreService } from '../services/livre/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrl: './create-livre.component.css'
})
export class CreateLivreComponent {

  form: FormGroup;
  submitted: boolean = false;
  listCategorie: string[] = [];

  constructor(private formBuilder: FormBuilder, private serviceCategory: CategoryService, private serviceLivre: LivreService, private route: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      price: ['', Validators.required],
      nbStar: ['', Validators.required],
      category: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.listCategorie = this.serviceCategory.getAllCategory();
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(livre: any) {
    this.submitted = true;
  
    // Vérification de la validité du formulaire
    if (this.form.invalid) {
      return;  // Si le formulaire est invalide, on arrête l'exécution
    } else {
      // Création d'un nouvel objet livre à partir des données du formulaire
      let livreTemp: Ilivres = {
        id: Number(9),
        category: livre.category,
        stars: Number(livre.nbrStar),
        name: livre.name,
        price: Number(livre.price),
        shortDescription: livre.shortDescription,
        imageUrl: livre.imageUrl,
        inStock: true,
        longDescription: ''
      };
  
      // Appel du service pour ajouter le livre
      this.serviceLivre.AjouterLivre(livreTemp).subscribe(
        () => {
          // Redirection après succès
          this.route.navigate(['/livres']);
        }
      );
    }
  }
  
}
