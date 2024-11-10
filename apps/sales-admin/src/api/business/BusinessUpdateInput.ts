import { UnitUpdateManyWithoutBusinessesInput } from "./UnitUpdateManyWithoutBusinessesInput";
import { IndustryWhereUniqueInput } from "../industry/IndustryWhereUniqueInput";
import { RelationUpdateManyWithoutBusinessesInput } from "./RelationUpdateManyWithoutBusinessesInput";
import { StrengthUpdateManyWithoutBusinessesInput } from "./StrengthUpdateManyWithoutBusinessesInput";
import { RelationWhereUniqueInput } from "../relation/RelationWhereUniqueInput";
import { WeaknessUpdateManyWithoutBusinessesInput } from "./WeaknessUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  businessUnits?: UnitUpdateManyWithoutBusinessesInput;
  industry?: IndustryWhereUniqueInput | null;
  name?: string | null;
  predecessorRelations?: RelationUpdateManyWithoutBusinessesInput;
  strengths?: StrengthUpdateManyWithoutBusinessesInput;
  succesorRelations?: RelationWhereUniqueInput | null;
  weaknesses?: WeaknessUpdateManyWithoutBusinessesInput;
};
