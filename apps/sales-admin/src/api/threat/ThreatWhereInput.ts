import { StringFilter } from "../../util/StringFilter";
import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type ThreatWhereInput = {
  id?: StringFilter;
  process?: ProcessWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
};
