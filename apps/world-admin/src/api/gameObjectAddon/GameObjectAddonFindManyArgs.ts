import { GameObjectAddonWhereInput } from "./GameObjectAddonWhereInput";
import { GameObjectAddonOrderByInput } from "./GameObjectAddonOrderByInput";

export type GameObjectAddonFindManyArgs = {
  where?: GameObjectAddonWhereInput;
  orderBy?: Array<GameObjectAddonOrderByInput>;
  skip?: number;
  take?: number;
};
