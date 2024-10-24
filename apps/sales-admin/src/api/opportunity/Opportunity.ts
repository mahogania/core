import { Proposal } from "../proposal/Proposal";
import { Unit } from "../unit/Unit";

export type Opportunity = {
  createdAt: Date;
  id: string;
  proposals?: Array<Proposal>;
  unit?: Unit | null;
  updatedAt: Date;
};
