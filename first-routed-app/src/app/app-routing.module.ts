import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent ,pathMatch: 'full'},
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
