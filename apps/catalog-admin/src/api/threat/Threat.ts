import { Process } from "../process/Process";
import { Unit } from "../unit/Unit";

export type Threat = {
  createdAt: Date;
  id: string;
  process?: Process | null;
  unit?: Unit | null;
  updatedAt: Date;
};
