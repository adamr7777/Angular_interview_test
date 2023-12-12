import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <!-- add the housing locations country Task 1.1-->
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}, {{housingLocation.country}}</p>
      <!-- add available units and +5 Task 1.2-->
      <p class="units-available">Units available: <span>{{
        housingLocation.availableUnits > 5? '+5': housingLocation.availableUnits
      }}</span></p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}


// Notes:
//   * had to assign a class for <p> displaying Units available and style it in the CSS file.
//   * placed {{housingLocation.availableUnits}} into <span> and styled it to guide users attention to the important info

