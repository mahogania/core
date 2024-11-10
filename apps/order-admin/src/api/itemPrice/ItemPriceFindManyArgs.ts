import { ItemPriceWhereInput } from "./ItemPriceWhereInput";
import { ItemPriceOrderByInput } from "./ItemPriceOrderByInput";

export type ItemPriceFindManyArgs = {
  where?: ItemPriceWhereInput;
  orderBy?: Array<ItemPriceOrderByInput>;
  skip?: number;
  take?: number;
};
