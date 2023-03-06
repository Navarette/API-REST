import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  //Ossreva i cambi di routing
  routeObs!: Observable<ParamMap>;
  album: any; //Qui salverò la traccia selezionata
  spotifyServiceObs!: Observable<any>; //Osservo il servizio
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService) { }



  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route album/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    let albumId = params.get('id'); //Ottengo l'id dai parametri
    console.log(albumId); //Stampo su console
    if (albumId != null) {
      this.spotifyServiceObs = this.service.getAlbum(albumId);
      console.log(albumId)
      this.spotifyServiceObs.subscribe((data) => this.album = data)
    }

  }
}
