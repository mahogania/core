import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const BulkTransactionLogDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput
          label="error_description"
          multiline
          source="errorDescription"
        />
        <TextInput label="from_doctype" source="fromDoctype" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="retried" source="retried" />
        <DateTimeInput label="time" source="time" />
        <TextInput label="to_doctype" source="toDoctype" />
        <TextInput label="transaction_name" source="transactionName" />
        <TextInput label="transaction_status" source="transactionStatus" />
      </SimpleForm>
    </Edit>
  );
};
