import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account_currency" source="accountCurrency" />
        <TextInput label="account_name" source="accountName" />
        <TextInput label="account_number" source="accountNumber" />
        <TextInput label="account_type" source="accountType" />
        <TextInput label="_assign" multiline source="assign" />
        <TextInput label="balance_must_be" source="balanceMustBe" />
        <TextInput label="_comments" multiline source="comments" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="freeze_account" source="freezeAccount" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="include_in_gross"
          source="includeInGross"
        />
        <NumberInput step={1} label="is_group" source="isGroup" />
        <NumberInput step={1} label="lft" source="lft" />
        <TextInput label="_liked_by" multiline source="likedBy" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="old_parent" source="oldParent" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_account" source="parentAccount" />
        <TextInput label="report_type" source="reportType" />
        <NumberInput step={1} label="rgt" source="rgt" />
        <TextInput label="root_type" source="rootType" />
        <NumberInput label="tax_rate" source="taxRate" />
        <TextInput label="_user_tags" multiline source="userTags" />
      </SimpleForm>
    </Create>
  );
};
