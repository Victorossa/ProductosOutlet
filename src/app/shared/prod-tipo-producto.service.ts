import { Injectable } from '@angular/core';
import { ProdTipoProducto } from './prod-tipo-producto.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
 


@Injectable({
  providedIn: 'root'
})
export class ProdTipoProductoService {

  formData: ProdTipoProducto;
  
  constructor(private http: HttpClient) { }

  postProdTipoProducto(formData: ProdTipoProducto) {
    return this.http.post(environment.rootURL + '/Prod_TipoProductos', formData);
  }
}
