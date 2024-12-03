import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PosPaymentMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="allowInReturns" source="allowInReturns" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="default" source="defaultField" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modeOfPayment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
      </SimpleForm>
    </Create>
  );
};
