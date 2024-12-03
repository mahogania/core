import { ItemBehaviourWhereInput } from "./ItemBehaviourWhereInput";
import { ItemBehaviourOrderByInput } from "./ItemBehaviourOrderByInput";

export type ItemBehaviourFindManyArgs = {
  where?: ItemBehaviourWhereInput;
  orderBy?: Array<ItemBehaviourOrderByInput>;
  skip?: number;
  take?: number;
};
