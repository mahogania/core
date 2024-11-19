import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type ThreatUpdateInput = {
  process?: ProcessWhereUniqueInput | null;
  unit?: UnitWhereUniqueInput | null;
};
