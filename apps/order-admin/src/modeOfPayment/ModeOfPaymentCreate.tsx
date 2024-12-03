import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const ModeOfPaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput step={1} label="enabled" source="enabled" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modeOfPayment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
