import { Configuration } from "../configuration/Configuration";
import { Unit } from "../unit/Unit";

export type Catalog = {
  configurations?: Array<Configuration>;
  createdAt: Date;
  description: string | null;
  displayName: string | null;
  id: string;
  name: string | null;
  unit?: Unit | null;
  updatedAt: Date;
};
