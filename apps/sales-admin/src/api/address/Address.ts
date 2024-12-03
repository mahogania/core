import { Unit } from "../unit/Unit";
import { Customer } from "../customer/Customer";

export type Address = {
  competitorBusinessUnits?: Array<Unit>;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
