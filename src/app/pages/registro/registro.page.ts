import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: '',
    correo: ''
  }
  constructor(private storage: Storage, private router:Router) { }

  ngOnInit() { 
  }


  onSubmit() {
    console.log(this.usuario);
    this.guardar();
  }

  async guardar() {
    let usr = await this.storage.get(this.usuario.username);

    if (usr == null) {
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("Usuario registrado");
      this.router.navigate(['/login']);
      
    }
    else{
      console.log("Usuario ya existe");
    }
  }

}
