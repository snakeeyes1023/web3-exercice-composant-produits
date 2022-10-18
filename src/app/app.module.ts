import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { InfoProduitComponent } from './info-produit/info-produit.component';
import { PiedProduitComponent } from './pied-produit/pied-produit.component';
import { PrixProduitComponent } from './prix-produit/prix-produit.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ListeProduitComponent,
    FicheProduitComponent,
    InfoProduitComponent,
    PiedProduitComponent,
    PrixProduitComponent,
    LienDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
