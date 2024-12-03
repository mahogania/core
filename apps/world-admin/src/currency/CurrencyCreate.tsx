import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
