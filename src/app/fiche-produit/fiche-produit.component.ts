import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {

  constructor() { }

  @Input() nom = '';
  @Input() prix = 0;
  @Input() description = '';

  ngOnInit(): void {
  }

}
