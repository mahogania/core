import { Unit } from "../unit/Unit";
import { Opportunity } from "../opportunity/Opportunity";
import { Strength } from "../strength/Strength";
import { Threat } from "../threat/Threat";
import { Weakness } from "../weakness/Weakness";

export type Business = {
  businessUnits?: Array<Unit>;
  createdAt: Date;
  id: string;
  name: string | null;
  opportunities?: Array<Opportunity>;
  strengths?: Array<Strength>;
  threats?: Array<Threat>;
  updatedAt: Date;
  weaknesses?: Array<Weakness>;
};
