import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaratteristicComponent } from './caratteristic/caratteristic.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'caratteristic/id', component: CaratteristicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
