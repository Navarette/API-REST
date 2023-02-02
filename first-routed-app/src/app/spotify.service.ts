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
        ' Bearer BQDf7t3MsC1wcMJA09l1MBWtaElhWtWAuvcX9YwTziUmXYe-Wh6Qp9oXEBd1G84-AJ-FoYmyuFCbLi-evpC6fHDa6-3NXURxCmdmV4R23vE2VrmcnX0VYk13FPhPiN2zNHO2oH2V0QHUBgb232wqJAe4nLaYDYcdcbQw2ZoUV4-dlWBBl_dFQX5WZFToTIzl'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDf7t3MsC1wcMJA09l1MBWtaElhWtWAuvcX9YwTziUmXYe-Wh6Qp9oXEBd1G84-AJ-FoYmyuFCbLi-evpC6fHDa6-3NXURxCmdmV4R23vE2VrmcnX0VYk13FPhPiN2zNHO2oH2V0QHUBgb232wqJAe4nLaYDYcdcbQw2ZoUV4-dlWBBl_dFQX5WZFToTIzl'
    });
    
    return this.http.get(url, { headers });
  }
}