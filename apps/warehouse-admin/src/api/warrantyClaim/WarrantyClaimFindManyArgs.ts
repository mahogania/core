import { WarrantyClaimWhereInput } from "./WarrantyClaimWhereInput";
import { WarrantyClaimOrderByInput } from "./WarrantyClaimOrderByInput";

export type WarrantyClaimFindManyArgs = {
  where?: WarrantyClaimWhereInput;
  orderBy?: Array<WarrantyClaimOrderByInput>;
  skip?: number;
  take?: number;
};
