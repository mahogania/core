import { BundleWhereInput } from "./BundleWhereInput";
import { BundleOrderByInput } from "./BundleOrderByInput";

export type BundleFindManyArgs = {
  where?: BundleWhereInput;
  orderBy?: Array<BundleOrderByInput>;
  skip?: number;
  take?: number;
};
