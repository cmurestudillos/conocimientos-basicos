
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { TemplateComponent } from './components/template/template.component';
import { GraficoComponent } from '../app/graficos/grafico/grafico.component';
import { BarraComponent } from '../app/graficos/barra/barra.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'formulario', component: TemplateComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'articulo/:id', component: ArticuloComponent }, 
  { path: 'buscar/:termino', component: BuscadorComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
