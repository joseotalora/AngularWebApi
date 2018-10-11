import { Component, OnInit } from '@angular/core';

import { UsuarioService} from '../shared/usuario.service';
import { Usuario} from '../shared/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarioList();

  }

  showForEdit(emp : Usuario)
  {
      this.usuarioService.selectedUsuario = Object.assign({}, emp);;
  }

  onDelete(id: number) {
    if (confirm('Desea eliminar el Usuario ?') == true) {
      this.usuarioService.deleteUsuario(id)
      .subscribe(x => {
        this.usuarioService.getUsuarioList();       
      })
    }
  }
}
