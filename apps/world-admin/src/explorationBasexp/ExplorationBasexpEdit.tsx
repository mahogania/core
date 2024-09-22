import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ExplorationBasexpEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="basexp" source="basexp" />
        <NumberInput step={1} label="level" source="level" />
      </SimpleForm>
    </Edit>
  );
};
