import { BattlegroundTemplateWhereInput } from "./BattlegroundTemplateWhereInput";
import { BattlegroundTemplateOrderByInput } from "./BattlegroundTemplateOrderByInput";

export type BattlegroundTemplateFindManyArgs = {
  where?: BattlegroundTemplateWhereInput;
  orderBy?: Array<BattlegroundTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
