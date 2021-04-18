import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CascadasComponent } from './components/productos/cascadas/cascadas.component';
import { CeramicaComponent } from './components/productos/ceramica/ceramica.component';
import { ChimeneasComponent } from './components/productos/chimeneas/chimeneas.component';
import { OtrosComponent } from './components/productos/otros/otros.component';
import { PrefabricadosComponent } from './components/productos/prefabricados/prefabricados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { YeseriaComponent } from './components/productos/yeseria/yeseria.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'productos', component: ProductosComponent, children:[
    {path: 'cascadas', component: CascadasComponent},
    {path: 'ceramica', component: CeramicaComponent},
    {path: 'chimeneas', component: ChimeneasComponent},
    {path: 'prefabricados', component: PrefabricadosComponent},
    {path: 'yeseria', component: NotFoundComponent},
    {path: 'otros', component: OtrosComponent}
  ]},
  {path: 'clientes', component: ClientesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
