import { SkillTiersWhereInput } from "./SkillTiersWhereInput";
import { SkillTiersOrderByInput } from "./SkillTiersOrderByInput";

export type SkillTiersFindManyArgs = {
  where?: SkillTiersWhereInput;
  orderBy?: Array<SkillTiersOrderByInput>;
  skip?: number;
  take?: number;
};
