import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AreaTriggerScriptCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="entry" source="entry" />
        <TextInput label="ScriptName" source="scriptName" />
      </SimpleForm>
    </Create>
  );
};
