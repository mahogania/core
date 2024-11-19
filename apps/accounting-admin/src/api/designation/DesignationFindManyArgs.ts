import { DesignationWhereInput } from "./DesignationWhereInput";
import { DesignationOrderByInput } from "./DesignationOrderByInput";

export type DesignationFindManyArgs = {
  where?: DesignationWhereInput;
  orderBy?: Array<DesignationOrderByInput>;
  skip?: number;
  take?: number;
};
