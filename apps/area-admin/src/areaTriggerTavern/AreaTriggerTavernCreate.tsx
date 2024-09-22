import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AreaTriggerTavernCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" multiline source="name" />
      </SimpleForm>
    </Create>
  );
};
