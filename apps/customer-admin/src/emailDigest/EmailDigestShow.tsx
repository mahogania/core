import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const EmailDigestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="add_quote" source="addQuote" />
        <TextField label="bank_balance" source="bankBalance" />
        <TextField label="calendar_events" source="calendarEvents" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="credit_balance" source="creditBalance" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="expense_year_to_date" source="expenseYearToDate" />
        <TextField label="expenses_booked" source="expensesBooked" />
        <TextField label="frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="income" source="income" />
        <TextField label="income_year_to_date" source="incomeYearToDate" />
        <TextField label="invoiced_amount" source="invoicedAmount" />
        <TextField label="issue" source="issue" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="new_quotations" source="newQuotations" />
        <TextField label="next_send" source="nextSend" />
        <TextField label="notifications" source="notifications" />
        <TextField label="owner" source="owner" />
        <TextField label="payables" source="payables" />
        <TextField label="pending_quotations" source="pendingQuotations" />
        <TextField label="project" source="project" />
        <TextField label="purchase_invoice" source="purchaseInvoice" />
        <TextField label="purchase_order" source="purchaseOrder" />
        <TextField
          label="purchase_orders_items_overdue"
          source="purchaseOrdersItemsOverdue"
        />
        <TextField
          label="purchase_orders_to_bill"
          source="purchaseOrdersToBill"
        />
        <TextField
          label="purchase_orders_to_receive"
          source="purchaseOrdersToReceive"
        />
        <TextField label="sales_invoice" source="salesInvoice" />
        <TextField label="sales_order" source="salesOrder" />
        <TextField label="sales_orders_to_bill" source="salesOrdersToBill" />
        <TextField
          label="sales_orders_to_deliver"
          source="salesOrdersToDeliver"
        />
        <TextField label="todo_list" source="todoList" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
