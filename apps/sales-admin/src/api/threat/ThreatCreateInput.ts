import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type ThreatCreateInput = {
  process?: ProcessWhereUniqueInput | null;
  unit?: UnitWhereUniqueInput | null;
};
