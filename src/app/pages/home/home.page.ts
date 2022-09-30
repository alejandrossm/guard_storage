import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ComidasService } from '../../services/comidas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private st:Storage, 
    private rt:Router,
    private srvComida:ComidasService) {}

  ngOnInit() {
    //console.log(this.srvComida.getListaComidas());
    this.cargarComidas();
  }


  cargarComidas()
  {
    
    this.srvComida.getListaComidas().subscribe(datos=>
      {
        console.log(datos);
      });
  }

  cerrarSesion(){
    this.logout();
    this.rt.navigate(['/login']);
  }

  async logout()
  {
    await this.st.set('session',null);
  }
}
