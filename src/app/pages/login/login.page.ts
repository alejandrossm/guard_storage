import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }
  constructor(private storage:Storage, private router:Router  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.logear();
  }

  async logear()
  {
    this.registrado =await this.storage.get(this.usuario.username);

    if (this.registrado!=null)
    {
      if(this.usuario.username==this.registrado.username && this.usuario.password==this.registrado.password)
      {
        console.log("Puede pasar");
        this.router.navigate(['/home']);
      }
      else{
        console.log("Usuario no existe!!!");
      }
    }
    else{
      console.log("Pa la casa por agilao");
    }
  }
}
