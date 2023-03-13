import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { OpenFoodFactsService } from '../open-food-facts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  title = 'first-routed-app';
  obsTrack!: Observable<Object>;
  results: any;
  constructor(public food: OpenFoodFactsService) {

  }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.food.searchTrack(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}
