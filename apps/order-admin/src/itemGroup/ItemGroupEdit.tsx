import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ItemGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput label="isGroup" source="isGroup" />
        <TextInput label="itemGroupName" source="itemGroupName" />
        <NumberInput step={1} label="lft" source="lft" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="oldParent" source="oldParent" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parentItemGroup" source="parentItemGroup" />
        <NumberInput step={1} label="rgt" source="rgt" />
      </SimpleForm>
    </Edit>
  );
};
