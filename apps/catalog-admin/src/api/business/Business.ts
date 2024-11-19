import { Unit } from "../unit/Unit";
import { Industry } from "../industry/Industry";
import { Relation } from "../relation/Relation";
import { Strength } from "../strength/Strength";
import { Weakness } from "../weakness/Weakness";

export type Business = {
  businessUnits?: Array<Unit>;
  createdAt: Date;
  id: string;
  industry?: Industry | null;
  name: string | null;
  predecessorRelations?: Array<Relation>;
  strengths?: Array<Strength>;
  succesorRelations?: Relation | null;
  updatedAt: Date;
  weaknesses?: Array<Weakness>;
};
