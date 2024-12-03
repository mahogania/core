import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const EmailDigestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="add_quote" source="addQuote" />
        <NumberInput step={1} label="bank_balance" source="bankBalance" />
        <NumberInput step={1} label="calendar_events" source="calendarEvents" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="credit_balance" source="creditBalance" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="enabled" source="enabled" />
        <NumberInput
          step={1}
          label="expense_year_to_date"
          source="expenseYearToDate"
        />
        <NumberInput step={1} label="expenses_booked" source="expensesBooked" />
        <TextInput label="frequency" source="frequency" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="income" source="income" />
        <NumberInput
          step={1}
          label="income_year_to_date"
          source="incomeYearToDate"
        />
        <NumberInput step={1} label="invoiced_amount" source="invoicedAmount" />
        <NumberInput step={1} label="issue" source="issue" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="new_quotations" source="newQuotations" />
        <TextInput label="next_send" source="nextSend" />
        <NumberInput step={1} label="notifications" source="notifications" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="payables" source="payables" />
        <NumberInput
          step={1}
          label="pending_quotations"
          source="pendingQuotations"
        />
        <NumberInput step={1} label="project" source="project" />
        <NumberInput
          step={1}
          label="purchase_invoice"
          source="purchaseInvoice"
        />
        <NumberInput step={1} label="purchase_order" source="purchaseOrder" />
        <NumberInput
          step={1}
          label="purchase_orders_items_overdue"
          source="purchaseOrdersItemsOverdue"
        />
        <NumberInput
          step={1}
          label="purchase_orders_to_bill"
          source="purchaseOrdersToBill"
        />
        <NumberInput
          step={1}
          label="purchase_orders_to_receive"
          source="purchaseOrdersToReceive"
        />
        <NumberInput step={1} label="sales_invoice" source="salesInvoice" />
        <NumberInput step={1} label="sales_order" source="salesOrder" />
        <NumberInput
          step={1}
          label="sales_orders_to_bill"
          source="salesOrdersToBill"
        />
        <NumberInput
          step={1}
          label="sales_orders_to_deliver"
          source="salesOrdersToDeliver"
        />
        <NumberInput step={1} label="todo_list" source="todoList" />
      </SimpleForm>
    </Create>
  );
};
