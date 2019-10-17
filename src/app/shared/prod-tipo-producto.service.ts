import { Injectable } from '@angular/core';
import { ProdTipoProducto } from './prod-tipo-producto.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProdTipoProductoService {

  formData: ProdTipoProducto;
  list : ProdTipoProducto[];
  constructor(private http: HttpClient) { }

  postProdTipoProducto(formData: ProdTipoProducto) {
    return this.http.post(environment.rootURL + '/Prod_TipoProductos', formData)
  }

  putProdTipoProducto(formData: ProdTipoProducto) {
    return this.http.put(environment.rootURL + '/Prod_TipoProductos/'+formData.TipoProductoID, formData)
  }

  deleteProdTipoProducto(id: number) {
    return this.http.delete(environment.rootURL + '/Prod_TipoProductos/'+id)
  }

  refreshList() {
    this.http.get(environment.rootURL + '/Prod_TipoProductos')
    .toPromise().then(res => this.list = res as ProdTipoProducto[])
  }
}
