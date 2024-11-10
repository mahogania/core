import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BomUpdateLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amendedFrom" source="amendedFrom" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currentBom" source="currentBom" />
        <NumberInput step={1} label="currentLevel" source="currentLevel" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="errorLog" source="errorLog" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="newBom" source="newBom" />
        <TextInput label="owner" source="owner" />
        <TextInput label="processedBoms" multiline source="processedBoms" />
        <TextInput label="status" source="status" />
        <TextInput label="updateType" source="updateType" />
      </SimpleForm>
    </Edit>
  );
};
