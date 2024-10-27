import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameWeatherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Chance" source="chance" />
        <NumberInput step={1} label="Kind" source="kind" />
        <div />
        <NumberInput step={1} label="Season" source="season" />
        <NumberInput step={1} label="Zone" source="zone" />
      </SimpleForm>
    </Edit>
  );
};
