import { SalesInvoiceTimesheet as TSalesInvoiceTimesheet } from "../api/salesInvoiceTimesheet/SalesInvoiceTimesheet";

export const SALESINVOICETIMESHEET_TITLE_FIELD = "name";

export const SalesInvoiceTimesheetTitle = (
  record: TSalesInvoiceTimesheet
): string => {
  return record.name?.toString() || String(record.id);
};
