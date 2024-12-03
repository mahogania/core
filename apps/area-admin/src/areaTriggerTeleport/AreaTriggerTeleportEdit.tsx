import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AreaTriggerTeleportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" multiline source="name" />
        <NumberInput step={1} label="PortLocID" source="portLocId" />
      </SimpleForm>
    </Edit>
  );
};
