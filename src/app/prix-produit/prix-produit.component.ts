import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix-produit',
  templateUrl: './prix-produit.component.html',
  styleUrls: ['./prix-produit.component.css']
})
export class PrixProduitComponent implements OnInit {

  constructor() { }

  @Input() prix = 0;

  ngOnInit(): void {
  }

}
