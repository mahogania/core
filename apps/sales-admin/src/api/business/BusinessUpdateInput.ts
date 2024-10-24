import { UnitUpdateManyWithoutBusinessesInput } from "./UnitUpdateManyWithoutBusinessesInput";
import { OpportunityUpdateManyWithoutBusinessesInput } from "./OpportunityUpdateManyWithoutBusinessesInput";
import { StrengthUpdateManyWithoutBusinessesInput } from "./StrengthUpdateManyWithoutBusinessesInput";
import { ThreatUpdateManyWithoutBusinessesInput } from "./ThreatUpdateManyWithoutBusinessesInput";
import { WeaknessUpdateManyWithoutBusinessesInput } from "./WeaknessUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  businessUnits?: UnitUpdateManyWithoutBusinessesInput;
  name?: string | null;
  opportunities?: OpportunityUpdateManyWithoutBusinessesInput;
  strengths?: StrengthUpdateManyWithoutBusinessesInput;
  threats?: ThreatUpdateManyWithoutBusinessesInput;
  weaknesses?: WeaknessUpdateManyWithoutBusinessesInput;
};
