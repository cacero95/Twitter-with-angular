import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises:any[] = [];
  tema:string = 'De que tema quire consultar';

  numeros = [1,2,3,4,5,6];
  
  imagen = 'assets/img/human.jpg';
  constructor(private http:HttpClient,
    private spoty:SpotifyService,
    private router:Router) {
    
    
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((data:any)=>{
      console.log(data);
      this.paises = data;
    })*/
  }

  ngOnInit() {
  }
  consultar(tipo_dato:string){
    console.log(tipo_dato);
    this.router.navigate(['/dashboard',tipo_dato]);
  }

}
