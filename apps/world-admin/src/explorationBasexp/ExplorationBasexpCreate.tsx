import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ExplorationBasexpCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="basexp" source="basexp" />
        <NumberInput step={1} label="level" source="level" />
      </SimpleForm>
    </Create>
  );
};
