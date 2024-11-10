import { AutoEmailReportWhereInput } from "./AutoEmailReportWhereInput";
import { AutoEmailReportOrderByInput } from "./AutoEmailReportOrderByInput";

export type AutoEmailReportFindManyArgs = {
  where?: AutoEmailReportWhereInput;
  orderBy?: Array<AutoEmailReportOrderByInput>;
  skip?: number;
  take?: number;
};
