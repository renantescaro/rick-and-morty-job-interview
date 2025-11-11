import { Origin } from "./Origin";
import { Location } from "./Location";

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: Origin;
  location: Location;
}
