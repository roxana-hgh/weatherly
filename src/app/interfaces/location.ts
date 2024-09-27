export interface Location {
    id: string;
    name: string;
    geometry: Geometry;
    timezone: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    isAccountResource: boolean;
  }
  
  export interface Geometry {
    type: string;
    coordinates: number[];
  }
  