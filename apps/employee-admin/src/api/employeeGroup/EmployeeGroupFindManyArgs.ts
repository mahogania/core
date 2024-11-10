import { EmployeeGroupWhereInput } from "./EmployeeGroupWhereInput";
import { EmployeeGroupOrderByInput } from "./EmployeeGroupOrderByInput";

export type EmployeeGroupFindManyArgs = {
  where?: EmployeeGroupWhereInput;
  orderBy?: Array<EmployeeGroupOrderByInput>;
  skip?: number;
  take?: number;
};
