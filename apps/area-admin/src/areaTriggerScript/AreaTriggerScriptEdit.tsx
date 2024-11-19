import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AreaTriggerScriptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="entry" source="entry" />
        <TextInput label="ScriptName" source="scriptName" />
      </SimpleForm>
    </Edit>
  );
};
