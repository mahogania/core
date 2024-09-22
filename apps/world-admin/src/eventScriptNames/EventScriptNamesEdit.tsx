import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EventScriptNamesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ScriptName" source="scriptName" />
      </SimpleForm>
    </Edit>
  );
};
