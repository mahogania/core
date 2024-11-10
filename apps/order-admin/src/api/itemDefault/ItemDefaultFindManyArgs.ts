import { ItemDefaultWhereInput } from "./ItemDefaultWhereInput";
import { ItemDefaultOrderByInput } from "./ItemDefaultOrderByInput";

export type ItemDefaultFindManyArgs = {
  where?: ItemDefaultWhereInput;
  orderBy?: Array<ItemDefaultOrderByInput>;
  skip?: number;
  take?: number;
};
