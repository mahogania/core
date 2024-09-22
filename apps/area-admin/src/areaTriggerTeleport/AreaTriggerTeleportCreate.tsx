import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AreaTriggerTeleportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" multiline source="name" />
        <NumberInput step={1} label="PortLocID" source="portLocId" />
      </SimpleForm>
    </Create>
  );
};
