import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dados = {
    senha   :'',
    servidor:''
  }
  constructor(private router: Router) {}
  chamada(){
    let navigationExtras: NavigationExtras = {
      state: {
        dados:this.dados
      }
    };
    this.router.navigate(['chamada'], navigationExtras)
  }
}
