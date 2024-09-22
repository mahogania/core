import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameWeatherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameWeathers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="zone" source="zone" />{" "}
      </Datagrid>
    </List>
  );
};
