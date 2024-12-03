import { EmployeeGroupTableWhereInput } from "./EmployeeGroupTableWhereInput";
import { EmployeeGroupTableOrderByInput } from "./EmployeeGroupTableOrderByInput";

export type EmployeeGroupTableFindManyArgs = {
  where?: EmployeeGroupTableWhereInput;
  orderBy?: Array<EmployeeGroupTableOrderByInput>;
  skip?: number;
  take?: number;
};
