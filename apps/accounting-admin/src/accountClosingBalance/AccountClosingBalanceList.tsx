import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountClosingBalanceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountClosingBalances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account" source="account" />
        <TextField label="account_currency" source="accountCurrency" />
        <TextField label="_assign" source="assign" />
        <TextField label="closing_date" source="closingDate" />
        <TextField label="_comments" source="comments" />
        <TextField label="company" source="company" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="credit" source="credit" />
        <TextField
          label="credit_in_account_currency"
          source="creditInAccountCurrency"
        />
        <TextField label="debit" source="debit" />
        <TextField
          label="debit_in_account_currency"
          source="debitInAccountCurrency"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="finance_book" source="financeBook" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="is_period_closing_voucher_entry"
          source="isPeriodClosingVoucherEntry"
        />
        <TextField label="_liked_by" source="likedBy" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField
          label="period_closing_voucher"
          source="periodClosingVoucher"
        />
        <TextField label="project" source="project" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="_user_tags" source="userTags" />{" "}
      </Datagrid>
    </List>
  );
};
