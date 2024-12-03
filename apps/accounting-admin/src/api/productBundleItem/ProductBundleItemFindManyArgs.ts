import { ProductBundleItemWhereInput } from "./ProductBundleItemWhereInput";
import { ProductBundleItemOrderByInput } from "./ProductBundleItemOrderByInput";

export type ProductBundleItemFindManyArgs = {
  where?: ProductBundleItemWhereInput;
  orderBy?: Array<ProductBundleItemOrderByInput>;
  skip?: number;
  take?: number;
};
