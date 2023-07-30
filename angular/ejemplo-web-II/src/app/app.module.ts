import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Graficos
import { ChartsModule } from 'ng2-charts';

// Rutas.
import { APP_ROUTING } from './app.routes';

// Servicios
import { ProductosService } from './servicios/productos.service';
import { CatalogoService } from './servicios/catalogo.service';
import { InsertarService} from './servicios/insertar.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArticuloTarjetaComponent } from './components/articulo-tarjeta/articulo-tarjeta.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { TemplateComponent } from './components/template/template.component';
import { BarraComponent } from './graficos/barra/barra.component';
import { RadarComponent } from './graficos/radar/radar.component';
import { GraficoComponent } from './graficos/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    ArticuloComponent,
    BuscadorComponent,
    ArticuloTarjetaComponent,
    CatalogoComponent,
    TemplateComponent,
    BarraComponent,
    RadarComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService,
    CatalogoService,
    InsertarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
