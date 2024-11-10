import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PosClosingEntryDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="closingAmount" source="closingAmount" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="difference" source="difference" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput label="expectedAmount" source="expectedAmount" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modeOfPayment" source="modeOfPayment" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="openingAmount" source="openingAmount" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
      </SimpleForm>
    </Edit>
  );
};
