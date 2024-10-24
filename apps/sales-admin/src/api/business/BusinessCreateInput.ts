import { UnitCreateNestedManyWithoutBusinessesInput } from "./UnitCreateNestedManyWithoutBusinessesInput";
import { OpportunityCreateNestedManyWithoutBusinessesInput } from "./OpportunityCreateNestedManyWithoutBusinessesInput";
import { StrengthCreateNestedManyWithoutBusinessesInput } from "./StrengthCreateNestedManyWithoutBusinessesInput";
import { ThreatCreateNestedManyWithoutBusinessesInput } from "./ThreatCreateNestedManyWithoutBusinessesInput";
import { WeaknessCreateNestedManyWithoutBusinessesInput } from "./WeaknessCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  businessUnits?: UnitCreateNestedManyWithoutBusinessesInput;
  name?: string | null;
  opportunities?: OpportunityCreateNestedManyWithoutBusinessesInput;
  strengths?: StrengthCreateNestedManyWithoutBusinessesInput;
  threats?: ThreatCreateNestedManyWithoutBusinessesInput;
  weaknesses?: WeaknessCreateNestedManyWithoutBusinessesInput;
};
