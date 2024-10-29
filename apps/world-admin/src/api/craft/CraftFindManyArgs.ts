import { CraftWhereInput } from "./CraftWhereInput";
import { CraftOrderByInput } from "./CraftOrderByInput";

export type CraftFindManyArgs = {
  where?: CraftWhereInput;
  orderBy?: Array<CraftOrderByInput>;
  skip?: number;
  take?: number;
};
