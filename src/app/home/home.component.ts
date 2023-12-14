import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter> 
        <button class="primary" type="button" (click)="handleSearch(filter.value)">Search</button>
        <button class="primary reset-btn" type="button" (click)="handleReset(filter)">Reset</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationsList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationsList: HousingLocation[] = []

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationsList = this.housingLocationList;
  }

  // Task 4.1 Search btn functionality
  handleSearch(inputText: string) {
    if(!inputText) {
      this.filteredLocationsList = this.housingLocationList;
      return;
    }
    
    this.filteredLocationsList = this.housingLocationList.filter((location)=> 
      location.city.toLowerCase().includes(inputText.toLowerCase()))
  }
  // Task 4.2 Reset Filter btn functionality
  handleReset(filter: HTMLInputElement) {
    this.filteredLocationsList = this.housingLocationList;
    filter.value = '';
  }
  // notes:
  // *added 5px left margin to Reset btn in css as well as hovered state (cursor: pointer) to Search and Reset btn
}
