import { Unit } from "../unit/Unit";

export type Address = {
  competitorBusinessUnits?: Array<Unit>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
