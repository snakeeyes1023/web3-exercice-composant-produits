import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  constructor() { }

  @Input() produits: Produit[] = [{nom : 'Produit 1', prix : 10, description : 'Description du produit 1', id : 1}, {nom : 'Produit 2', prix : 20, description : 'Description du produit 2', id : 2}, {nom : 'Produit 3', prix : 30, description : 'Description du produit 3', id : 3}];

  ngOnInit(): void {
  }
}
