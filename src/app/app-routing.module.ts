import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsLivreComponent } from './details-livre/details-livre.component';
import { detailsLivreGuard } from './guard/details-livre.guard';
import { CreateLivreComponent } from './create-livre/create-livre.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, // localhost:4200/ va rediriger vers le component homecomponent
  {path:'home', component:HomeComponent}, // localhost:4200/home va rediriger vers le component homecomponent
  {path:'livres', component:ListLivresComponent},
  {path:'add', component:CreateLivreComponent},
  {path:'livre/:id', component:DetailsLivreComponent, canActivate:[detailsLivreGuard]}, // pour ce composant, on va vérifier que l'utilisateur a le droit d'y accéder
  {path:'**', component:NotFoundComponent} // si on tente d'accéder à une url qui n'existe pas, on redirige vers le NotFoundcomponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
