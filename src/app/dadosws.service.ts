import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadoswsService {

  constructor(public http: HttpClient) { }
  getChamada(servidor){
    return new Promise((resolve, reject) => {
      this.http.get('http://'+servidor+'/?evento=chamada').toPromise()
      .then((dados)=>{
        resolve(dados);
      }).catch((erro)=>{
        reject(erro);
      })
    
    });


    //this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(dados=>{
    //  console.log(dados);
    //});
  }
}

