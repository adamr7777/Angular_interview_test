import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <section class="photo-container">
        <img class="listing-photo" [src]="housingLocation?.photo"
          alt="Exterior photo of {{housingLocation?.name}}"/>
          <!-- create Delete btn Task 3.1-->
        <button class="delete-btn primary" (click)="deleteMe()">Delete</button>
      </section>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <!-- add the housing locations country Task 2.1-->
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}, {{housingLocation?.country}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <!-- update with +5 functionality Task 2.2-->
          <!-- note: had to add cond rendering with *ngIf to get rid of TS error in the ternary-->
          <li *ngIf="housingLocation">Units available: {{
            housingLocation.availableUnits > 5 ? '+5': housingLocation.availableUnits
          }}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary apply-btn">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  router: Router = inject(Router);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  deleteMe() {
    //TODO: TASK 3.2: delete functionality
    this.router.navigate(['/']);

    this.housingService.deleteHousingLocation(this.housingLocation!.id);
  }
  
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}