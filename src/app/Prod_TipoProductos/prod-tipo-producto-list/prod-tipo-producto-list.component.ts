import { Component, OnInit } from '@angular/core';
import { ProdTipoProductoService } from 'src/app/shared/prod-tipo-producto.service';
import { ProdTipoProducto } from 'src/app/shared/prod-tipo-producto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prod-tipo-producto-list',
  templateUrl: './prod-tipo-producto-list.component.html',
  styleUrls: ['./prod-tipo-producto-list.component.css']
})
export class ProdTipoProductoListComponent implements OnInit {

  constructor(private service: ProdTipoProductoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(item: ProdTipoProducto) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(id: number) {
    this.service.deleteProdTipoProducto(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.info('Eliminado - Tipo de Producto', 'Outlet Virtual')
    })
  }

}
