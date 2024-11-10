import { ItemReorderWhereInput } from "./ItemReorderWhereInput";
import { ItemReorderOrderByInput } from "./ItemReorderOrderByInput";

export type ItemReorderFindManyArgs = {
  where?: ItemReorderWhereInput;
  orderBy?: Array<ItemReorderOrderByInput>;
  skip?: number;
  take?: number;
};
