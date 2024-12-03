import { BomScrapItemWhereInput } from "./BomScrapItemWhereInput";
import { BomScrapItemOrderByInput } from "./BomScrapItemOrderByInput";

export type BomScrapItemFindManyArgs = {
  where?: BomScrapItemWhereInput;
  orderBy?: Array<BomScrapItemOrderByInput>;
  skip?: number;
  take?: number;
};
