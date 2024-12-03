import { SalesInvoiceTimesheetWhereInput } from "./SalesInvoiceTimesheetWhereInput";
import { SalesInvoiceTimesheetOrderByInput } from "./SalesInvoiceTimesheetOrderByInput";

export type SalesInvoiceTimesheetFindManyArgs = {
  where?: SalesInvoiceTimesheetWhereInput;
  orderBy?: Array<SalesInvoiceTimesheetOrderByInput>;
  skip?: number;
  take?: number;
};
