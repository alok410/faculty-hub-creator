export interface PlacedStudent {
  name: string;
  branch: string;
  company: string;
  package: string;
  image: string;
  fallbackImage?: string;
}

import data from "./placed-students.json";

export const PLACED_STUDENTS: PlacedStudent[] = data as PlacedStudent[];
