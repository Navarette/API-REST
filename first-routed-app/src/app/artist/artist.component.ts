import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  //Ossreva i cambi di routing
  routeObs!: Observable<ParamMap>;
  artist: any; //Qui salverò la traccia selezionata
  spotifyServiceObs!: Observable<any>; //Osservo il servizio
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService){}
    


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route artist/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    let artistId = params.get('id'); //Ottengo l'id dai parametri
    console.log(artistId); //Stampo su console
    if (artistId != null) {
      this.spotifyServiceObs = this.service.getArtist(artistId);
      console.log(artistId)
      this.spotifyServiceObs.subscribe((data) => this.artist = data)
    }

  }

  
}
