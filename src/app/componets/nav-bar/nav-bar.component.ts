import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  urlImagen = 'https://images-na.ssl-images-amazon.com/images/I/61DUfbXQhGL.png';
  constructor() { }

  ngOnInit(): void {
  }

}
