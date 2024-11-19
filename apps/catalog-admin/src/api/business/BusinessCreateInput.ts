import { UnitCreateNestedManyWithoutBusinessesInput } from "./UnitCreateNestedManyWithoutBusinessesInput";
import { IndustryWhereUniqueInput } from "../industry/IndustryWhereUniqueInput";
import { RelationCreateNestedManyWithoutBusinessesInput } from "./RelationCreateNestedManyWithoutBusinessesInput";
import { StrengthCreateNestedManyWithoutBusinessesInput } from "./StrengthCreateNestedManyWithoutBusinessesInput";
import { RelationWhereUniqueInput } from "../relation/RelationWhereUniqueInput";
import { WeaknessCreateNestedManyWithoutBusinessesInput } from "./WeaknessCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  businessUnits?: UnitCreateNestedManyWithoutBusinessesInput;
  industry?: IndustryWhereUniqueInput | null;
  name?: string | null;
  predecessorRelations?: RelationCreateNestedManyWithoutBusinessesInput;
  strengths?: StrengthCreateNestedManyWithoutBusinessesInput;
  succesorRelations?: RelationWhereUniqueInput | null;
  weaknesses?: WeaknessCreateNestedManyWithoutBusinessesInput;
};
