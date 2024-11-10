import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AccountClosingBalanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="account_currency" source="accountCurrency" />
        <TextInput label="_assign" multiline source="assign" />
        <DateTimeInput label="closing_date" source="closingDate" />
        <TextInput label="_comments" multiline source="comments" />
        <TextInput label="company" source="company" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="credit" source="credit" />
        <NumberInput
          label="credit_in_account_currency"
          source="creditInAccountCurrency"
        />
        <NumberInput label="debit" source="debit" />
        <NumberInput
          label="debit_in_account_currency"
          source="debitInAccountCurrency"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="finance_book" source="financeBook" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="is_period_closing_voucher_entry"
          source="isPeriodClosingVoucherEntry"
        />
        <TextInput label="_liked_by" multiline source="likedBy" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput
          label="period_closing_voucher"
          source="periodClosingVoucher"
        />
        <TextInput label="project" source="project" />
        <TextInput label="_user_tags" multiline source="userTags" />
      </SimpleForm>
    </Create>
  );
};
