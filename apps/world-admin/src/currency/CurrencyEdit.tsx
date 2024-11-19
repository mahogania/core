import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Symbol" source="symbolField" />
      </SimpleForm>
    </Edit>
  );
};
