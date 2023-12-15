import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      country: 'USA',
      state: 'IL',
      photo: '/assets/accomodations/1.avif',
      availableUnits: 8,
      wifi: true,
      laundry: true,
      applications: []
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      country: 'USA',
      state: 'CA',
      photo: '/assets/accomodations/2.avif',
      availableUnits: 3,
      wifi: false,
      laundry: true,
      applications: []
    },
    {
      id: 2,
      name: 'Big Ben Housing',
      city: 'London',
      country: 'United Kingdom',
      state: 'LONDON',
      photo: '/assets/accomodations/3.avif',
      availableUnits: 1,
      wifi: false,
      laundry: false,
      applications: []
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      country: 'USA',
      state: 'IL',
      photo: '/assets/accomodations/4.avif',
      availableUnits: 1,
      wifi: true,
      laundry: false,
      applications: []
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      country: 'USA',
      state: 'IN',
      photo: '/assets/accomodations/5.avif',
      availableUnits: 1,
      wifi: true,
      laundry: false,
      applications: []
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      country: 'USA',
      state: 'CA',
      photo: '/assets/accomodations/6.avif',
      availableUnits: 2,
      wifi: true,
      laundry: true,
      applications: []
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      country: 'USA',
      state: 'CA',
      photo: '/assets/accomodations/7.avif',
      availableUnits: 12,
      wifi: true,
      laundry: true,
      applications: []
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      country: 'USA',
      state: 'CA',
      photo: '/assets/accomodations/8.avif',
      availableUnits: 2,
      wifi: true,
      laundry: true,
      applications: []
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Paris',
      country: 'France',
      state: 'PARIS',
      photo: '/assets/accomodations/9.avif',
      availableUnits: 10,
      wifi: false,
      laundry: false,
      applications: []
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Milan',
      country: 'Italy',
      state: 'IT',
      photo: '/assets/accomodations/10.avif',
      availableUnits: 6,
      wifi: true,
      laundry: true,
      applications: []
    }
  ];

  

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
  
  submitApplication(firstName: string, lastName: string, email: string, id: number) {
    // Task 5.2
    this.housingLocationList.forEach((location)=> {
      if(location.id === id) location?.applications?.push({
        firstName,
        lastName,
        email
      });
    })  
  }

  deleteHousingLocation(id: number) {
    //TODO: TASK 3.3: delete functionality - delete location from 
    const filteredLocationsArray = this.housingLocationList.filter((location)=> location.id !== id);
    this.housingLocationList = filteredLocationsArray;
  }

  reduceAvailableUnits(id: number) {
    const location = this.housingLocationList.find((location)=> location.id === id)
    location!.availableUnits -= 1
  }
}
