import { GameObjectTemplateWhereInput } from "./GameObjectTemplateWhereInput";
import { GameObjectTemplateOrderByInput } from "./GameObjectTemplateOrderByInput";

export type GameObjectTemplateFindManyArgs = {
  where?: GameObjectTemplateWhereInput;
  orderBy?: Array<GameObjectTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
