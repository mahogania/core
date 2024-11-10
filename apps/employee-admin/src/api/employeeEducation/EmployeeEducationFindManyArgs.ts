import { EmployeeEducationWhereInput } from "./EmployeeEducationWhereInput";
import { EmployeeEducationOrderByInput } from "./EmployeeEducationOrderByInput";

export type EmployeeEducationFindManyArgs = {
  where?: EmployeeEducationWhereInput;
  orderBy?: Array<EmployeeEducationOrderByInput>;
  skip?: number;
  take?: number;
};
