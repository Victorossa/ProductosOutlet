import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productosppal/productos/productos.component';
import { ProductoComponent } from './productosppal/producto/producto.component';
import { ProductoListComponent } from './productosppal/producto-list/producto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
