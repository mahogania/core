export type AutoEmailReportCreateInput = {
  creation?: Date | null;
  dataModifiedTill?: number | null;
  dayOfWeek?: string | null;
  description?: string | null;
  docstatus?: number | null;
  dynamicDatePeriod?: string | null;
  emailTo?: string | null;
  enabled?: number | null;
  filterMeta?: string | null;
  filters?: string | null;
  format?: string | null;
  frequency?: string | null;
  fromDateField?: string | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  noOfRows?: number | null;
  owner?: string | null;
  referenceReport?: string | null;
  report?: string | null;
  reportType?: string | null;
  sendIfData?: number | null;
  sender?: string | null;
  toDateField?: string | null;
  useFirstDayOfPeriod?: number | null;
  user?: string | null;
};