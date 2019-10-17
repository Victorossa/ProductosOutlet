import { Component, OnInit } from '@angular/core';
import { ProdTipoProductoService } from 'src/app/shared/prod-tipo-producto.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prod-tipo-producto',
  templateUrl: './prod-tipo-producto.component.html',
  styleUrls: ['./prod-tipo-producto.component.css']
})
export class ProdTipoProductoComponent implements OnInit {

  constructor(private service: ProdTipoProductoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      TipoProductoID: null,
      Tipo: '',
      DescripcionTipoProducto: '',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.TipoProductoID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    this.service.postProdTipoProducto(form.value).subscribe(res => {
      this.toastr.success('Tipo Producto Guardado', 'Outlet Virtual')
      this.service.refreshList();
      this.resetForm(form);
    })
  }

  updateRecord(form: NgForm) {
    this.service.putProdTipoProducto(form.value).subscribe(res => {
      this.toastr.success('Tipo Producto Actualizado', 'Outlet Virtual')
      this.service.refreshList();
      this.resetForm(form);
    })
  }
}


