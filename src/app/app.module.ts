import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdTipoProductosComponent } from './Prod_TipoProductos/prod-tipo-productos/prod-tipo-productos.component';
import { ProdTipoProductoComponent } from './Prod_TipoProductos/prod-tipo-producto/prod-tipo-producto.component';
import { ProdTipoProductoListComponent } from './Prod_TipoProductos/prod-tipo-producto-list/prod-tipo-producto-list.component';
import { ProdTipoProductoService } from './shared/prod-tipo-producto.service';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    ProdTipoProductosComponent,
    ProdTipoProductoComponent,
    ProdTipoProductoListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdTipoProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
