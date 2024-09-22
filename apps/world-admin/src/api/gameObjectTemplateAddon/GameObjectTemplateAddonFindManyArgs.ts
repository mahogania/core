import { GameObjectTemplateAddonWhereInput } from "./GameObjectTemplateAddonWhereInput";
import { GameObjectTemplateAddonOrderByInput } from "./GameObjectTemplateAddonOrderByInput";

export type GameObjectTemplateAddonFindManyArgs = {
  where?: GameObjectTemplateAddonWhereInput;
  orderBy?: Array<GameObjectTemplateAddonOrderByInput>;
  skip?: number;
  take?: number;
};
