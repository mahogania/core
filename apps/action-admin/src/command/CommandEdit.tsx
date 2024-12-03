import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Help" multiline source="help" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
