import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AreaTriggerTavernEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" multiline source="name" />
      </SimpleForm>
    </Edit>
  );
};
