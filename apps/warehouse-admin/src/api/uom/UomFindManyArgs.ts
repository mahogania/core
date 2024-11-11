import { UomWhereInput } from "./UomWhereInput";
import { UomOrderByInput } from "./UomOrderByInput";

export type UomFindManyArgs = {
  where?: UomWhereInput;
  orderBy?: Array<UomOrderByInput>;
  skip?: number;
  take?: number;
};
