import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {Usuario} from './usuario.model'

@Injectable()
export class UsuarioService {

  selectedUsuario : Usuario;
  usuarioList : Usuario[];
  constructor(private http : Http) { }

  PostUSUARIOS(usu : Usuario){
    var body = JSON.stringify(usu);
    var headerOpetions =  new Headers({'Content-Type' : 'application/json'});
    var requestOptions =  new RequestOptions({method : RequestMethod.Post, headers : headerOpetions });
    return this.http.post('http://localhost:3213/api/Usuario',body,requestOptions).map(x => x.json());
    
  }

  PutUSUARIOS(id , emp){
    var body = JSON.stringify(emp);
    var headerOpetions =  new Headers({'Content-Type' : 'application/json'});
    var requestOptions =  new RequestOptions({method : RequestMethod.Put, headers : headerOpetions });
    return this.http.post('http://localhost:3213/api/Usuario/' + id,body,requestOptions).map(x => x.json());
    
  }

  getUsuarioList(){
    this.http.get('http://localhost:3213/api/Usuario')
    .map((data : Response) => {
      return data.json() as Usuario[];
    }).toPromise().then(x => {
      this.usuarioList = x;
    });
  }

  deleteUsuario(id: number) {
    return this.http.delete('http://localhost:3213/api/Usuario/' + id).map(res => res.json());
  }
}

