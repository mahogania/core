import { BomWebsiteItemWhereInput } from "./BomWebsiteItemWhereInput";
import { BomWebsiteItemOrderByInput } from "./BomWebsiteItemOrderByInput";

export type BomWebsiteItemFindManyArgs = {
  where?: BomWebsiteItemWhereInput;
  orderBy?: Array<BomWebsiteItemOrderByInput>;
  skip?: number;
  take?: number;
};
