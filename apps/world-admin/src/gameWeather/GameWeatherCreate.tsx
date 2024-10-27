import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameWeatherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Chance" source="chance" />
        <NumberInput step={1} label="Kind" source="kind" />
        <div />
        <NumberInput step={1} label="Season" source="season" />
        <NumberInput step={1} label="Zone" source="zone" />
      </SimpleForm>
    </Create>
  );
};
