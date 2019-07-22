import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadoswsService } from './../dadosws.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.page.html',
  styleUrls: ['./chamada.page.scss'],
})
export class ChamadaPage implements OnInit {
  public dados : any={
    senha :0,
    servidor :''
  }
  public chamada : any ={
    senha : 0,
    guiche : 0
  }
  constructor(private route: ActivatedRoute, private router: Router,public ws : DadoswsService,private nativeAudio: NativeAudio) { 
    this.nativeAudio.preloadSimple('uniqueId1', 'asset/som/som.mp3');
    this.nativeAudio.play('uniqueId1');
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dados = this.router.getCurrentNavigation().extras.state.dados;
        
        setInterval(function(){ this.getChamada(this.dados.servidor);}.bind(this), 3000);
         
      }
    });
  }
  getChamada(servidor){
    this.ws.getChamada(servidor).then(chamada=>{
      if (chamada[0] != undefined){
        this.chamada.senha = chamada[0].idChamada;
        this.chamada.guiche = chamada[0].guiche; 
      }
    });
  }
  voltar(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
