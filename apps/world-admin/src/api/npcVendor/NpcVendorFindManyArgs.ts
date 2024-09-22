import { NpcVendorWhereInput } from "./NpcVendorWhereInput";
import { NpcVendorOrderByInput } from "./NpcVendorOrderByInput";

export type NpcVendorFindManyArgs = {
  where?: NpcVendorWhereInput;
  orderBy?: Array<NpcVendorOrderByInput>;
  skip?: number;
  take?: number;
};
