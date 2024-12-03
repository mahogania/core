import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const JournalEntryTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="is_opening" source="isOpening" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput step={1} label="multi_currency" source="multiCurrency" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="template_title" source="templateTitle" />
        <TextInput label="voucher_type" source="voucherType" />
      </SimpleForm>
    </Edit>
  );
};
