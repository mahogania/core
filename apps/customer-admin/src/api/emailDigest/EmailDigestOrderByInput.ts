import { SortOrder } from "../../util/SortOrder";

export type EmailDigestOrderByInput = {
  addQuote?: SortOrder;
  bankBalance?: SortOrder;
  calendarEvents?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  creditBalance?: SortOrder;
  docstatus?: SortOrder;
  enabled?: SortOrder;
  expenseYearToDate?: SortOrder;
  expensesBooked?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  income?: SortOrder;
  incomeYearToDate?: SortOrder;
  invoicedAmount?: SortOrder;
  issue?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  newQuotations?: SortOrder;
  nextSend?: SortOrder;
  notifications?: SortOrder;
  owner?: SortOrder;
  payables?: SortOrder;
  pendingQuotations?: SortOrder;
  project?: SortOrder;
  purchaseInvoice?: SortOrder;
  purchaseOrder?: SortOrder;
  purchaseOrdersItemsOverdue?: SortOrder;
  purchaseOrdersToBill?: SortOrder;
  purchaseOrdersToReceive?: SortOrder;
  salesInvoice?: SortOrder;
  salesOrder?: SortOrder;
  salesOrdersToBill?: SortOrder;
  salesOrdersToDeliver?: SortOrder;
  todoList?: SortOrder;
  updatedAt?: SortOrder;
};