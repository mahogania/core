import { PlayerCraftWhereInput } from "./PlayerCraftWhereInput";
import { PlayerCraftOrderByInput } from "./PlayerCraftOrderByInput";

export type PlayerCraftFindManyArgs = {
  where?: PlayerCraftWhereInput;
  orderBy?: Array<PlayerCraftOrderByInput>;
  skip?: number;
  take?: number;
};
