import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
  const url = `https://api.spotify.com/v1/${ query }`;
   const headers = new HttpHeaders({
    'Authorization': `Bearer BQB1pwM7GHMWdpiRbUvGQiqEGQ5j0t_cLluJQlsmeCF6poJrE4N-fZufWaH1R9knqSmxhns1l8rdBAEInT0`
    });
    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data =>data['albums'].items));
  }
}
