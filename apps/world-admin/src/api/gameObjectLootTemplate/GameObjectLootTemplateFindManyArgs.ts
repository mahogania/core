import { GameObjectLootTemplateWhereInput } from "./GameObjectLootTemplateWhereInput";
import { GameObjectLootTemplateOrderByInput } from "./GameObjectLootTemplateOrderByInput";

export type GameObjectLootTemplateFindManyArgs = {
  where?: GameObjectLootTemplateWhereInput;
  orderBy?: Array<GameObjectLootTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
