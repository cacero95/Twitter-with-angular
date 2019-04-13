import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

 
  tema_busqueda:string;  
  posicion:string;
  user:string;
  tick:boolean;
  resultado:boolean = false;
  tweets:any[] = [];
  constructor(private http:HttpClient) {

  }

  ngOnInit() {
  }
  buscar(){
    this.resultado = true;
    //console.log(this.resultado);
    this.tema_busqueda = this.tema_busqueda.toLocaleLowerCase();
    console.log(this.tema_busqueda);
    if (this.tema_busqueda == 'universidad piloto de colombia'){
      this.tema_busqueda = 'UPilotoOficial';
    }
    this.resultado = true;
    if(this.tick){
      let busqueda = {
        type:'hashtag'
      }
      this.http.post('https://vetcompany.herokuapp.com/twitter',busqueda)
      .subscribe((data:any)=>{
        this.tweets = data.cuerpo.statuses;
        console.log(this.tweets);
      })
    }
    else {
      let busqueda = {
        tema:this.tema_busqueda,
        type: 'tweets'
      }
      this.http.post(`https://vetcompany.herokuapp.com/twitter`,busqueda)
      .subscribe((data:any)=>{
        this.tweets = data.cuerpo.statuses;
        console.log(this.tweets);
      })
    }
    
    //console.log(this.tema_busqueda,this.posicion,this.user,this.tick);
  }

}
