import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  tipo_consulta:string;
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(data=>{
      console.log(data['id']);
      this.tipo_consulta = data['id'];
    })
  }

  ngOnInit() {
  }

}
