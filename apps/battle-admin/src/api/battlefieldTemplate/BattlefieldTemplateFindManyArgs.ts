import { BattlefieldTemplateWhereInput } from "./BattlefieldTemplateWhereInput";
import { BattlefieldTemplateOrderByInput } from "./BattlefieldTemplateOrderByInput";

export type BattlefieldTemplateFindManyArgs = {
  where?: BattlefieldTemplateWhereInput;
  orderBy?: Array<BattlefieldTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
