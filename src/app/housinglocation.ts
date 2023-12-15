export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  country: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  applications: {
    firstName: string;
    lastName: string;
    email: string;
  }[] | null;
}
