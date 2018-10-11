import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';

import { UsuarioService} from '../shared/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form !=null)    
    form.reset();
    this.usuarioService.selectedUsuario = {
      ID : null,
      NOMBRE : '',
      EMAIL : '',
      PASSWORD : ''
    }
  }

  onSubmit(form : NgForm){
    if(form.value.UsuId == null){
      this.usuarioService.PostUSUARIOS(form.value)
      .subscribe( data=>{
        this.resetForm(form);
        this.usuarioService.getUsuarioList();
      })
    }
    else{
       this.usuarioService.PutUSUARIOS(form.value.UsuId, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.usuarioService.getUsuarioList();
      })


    }
    
  }
}
