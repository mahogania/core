import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const UomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="enabled" source="enabled" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modified_by" source="modifiedBy" />
        <BooleanInput label="must_be_whole_number" source="mustBeWholeNumber" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="uom_name" source="uomName" />
      </SimpleForm>
    </Edit>
  );
};
