import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CommunicationMediumEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="catch_all" source="catchAll" />
        <TextInput
          label="communication_channel"
          source="communicationChannel"
        />
        <TextInput
          label="communication_medium_type"
          source="communicationMediumType"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="owner" source="owner" />
        <TextInput label="provider" source="provider" />
      </SimpleForm>
    </Edit>
  );
};
