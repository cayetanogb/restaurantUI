import { Observable } from 'rxjs';
import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: Categoria[] = [];
  categoria$: Observable<Categoria>;

  constructor(private servicio: CategoriaService) {}

  ngOnInit() {
    this.servicio.getCategorias().subscribe( res  => {
      this.categorias = res;
    });
  }

  mostrarProd(id: number) {
    this.categoria$ = this.servicio.getCategoria(id);
  }

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

}
