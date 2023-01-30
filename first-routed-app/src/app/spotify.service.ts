import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        ' Bearer BQB1GZFTJTZ73YMzVnz4242mVdYn4zqh0IwS18sGxreu_sgJF9Ue-gRCP8MnkaX6HNwyjG3ZIGmDJdUBzpHPwFoFExjK4YAUOqOt44YT-8Pur3JxNqnj_Yv3MT8p1z31uYNW0RBshjQiOC2zWVCHeKl2tyJA6ah_Xy3rNXwbnshnct4vdMD4s27Oci3lnvr3'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB1GZFTJTZ73YMzVnz4242mVdYn4zqh0IwS18sGxreu_sgJF9Ue-gRCP8MnkaX6HNwyjG3ZIGmDJdUBzpHPwFoFExjK4YAUOqOt44YT-8Pur3JxNqnj_Yv3MT8p1z31uYNW0RBshjQiOC2zWVCHeKl2tyJA6ah_Xy3rNXwbnshnct4vdMD4s27Oci3lnvr3'
    });
    
    return this.http.get(url, { headers });
  }
}