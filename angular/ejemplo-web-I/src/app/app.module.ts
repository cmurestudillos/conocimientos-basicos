import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Rutas.
import { APP_ROUTING } from './app.routes';

// Servicios
import { ProductosService } from './servicios/productos.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArticuloTarjetaComponent } from './components/articulo-tarjeta/articulo-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    ArticuloComponent,
    BuscadorComponent,
    ArticuloTarjetaComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
