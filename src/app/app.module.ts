import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtoileComponent } from './etoile/etoile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsLivreComponent } from './details-livre/details-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './backend/backend';
import { CreateLivreComponent } from './create-livre/create-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    EtoileComponent,
    HomeComponent,
    NotFoundComponent,
    DetailsLivreComponent,
    CreateLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
