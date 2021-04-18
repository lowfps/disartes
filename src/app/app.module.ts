import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChimeneasComponent } from './components/productos/chimeneas/chimeneas.component';
import { CascadasComponent } from './components/productos/cascadas/cascadas.component';
import { YeseriaComponent } from './components/productos/yeseria/yeseria.component';
import { CeramicaComponent } from './components/productos/ceramica/ceramica.component';
import { PrefabricadosComponent } from './components/productos/prefabricados/prefabricados.component';
import { OtrosComponent } from './components/productos/otros/otros.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    ProductosComponent,
    ClientesComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    ChimeneasComponent,
    CascadasComponent,
    YeseriaComponent,
    CeramicaComponent,
    PrefabricadosComponent,
    OtrosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
