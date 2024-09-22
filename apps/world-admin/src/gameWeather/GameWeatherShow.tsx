import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const GameWeatherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fall_rain_chance" source="fallRainChance" />
        <TextField label="fall_snow_chance" source="fallSnowChance" />
        <TextField label="fall_storm_chance" source="fallStormChance" />
        <TextField label="ID" source="id" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="spring_rain_chance" source="springRainChance" />
        <TextField label="spring_snow_chance" source="springSnowChance" />
        <TextField label="spring_storm_chance" source="springStormChance" />
        <TextField label="summer_rain_chance" source="summerRainChance" />
        <TextField label="summer_snow_chance" source="summerSnowChance" />
        <TextField label="summer_storm_chance" source="summerStormChance" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="winter_rain_chance" source="winterRainChance" />
        <TextField label="winter_snow_chance" source="winterSnowChance" />
        <TextField label="winter_storm_chance" source="winterStormChance" />
        <TextField label="zone" source="zone" />
      </SimpleShowLayout>
    </Show>
  );
};
