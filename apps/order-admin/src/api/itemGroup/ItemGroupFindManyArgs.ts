import { ItemGroupWhereInput } from "./ItemGroupWhereInput";
import { ItemGroupOrderByInput } from "./ItemGroupOrderByInput";

export type ItemGroupFindManyArgs = {
  where?: ItemGroupWhereInput;
  orderBy?: Array<ItemGroupOrderByInput>;
  skip?: number;
  take?: number;
};
