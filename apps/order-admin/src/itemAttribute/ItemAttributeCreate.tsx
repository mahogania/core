import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ItemAttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attributeName" source="attributeName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="fromRange" source="fromRange" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="increment" source="increment" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <BooleanInput label="numericValues" source="numericValues" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="toRange" source="toRange" />
      </SimpleForm>
    </Create>
  );
};
