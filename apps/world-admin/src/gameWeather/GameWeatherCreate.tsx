import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameWeatherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="fall_rain_chance"
          source="fallRainChance"
        />
        <NumberInput
          step={1}
          label="fall_snow_chance"
          source="fallSnowChance"
        />
        <NumberInput
          step={1}
          label="fall_storm_chance"
          source="fallStormChance"
        />
        <TextInput label="ScriptName" source="scriptName" />
        <NumberInput
          step={1}
          label="spring_rain_chance"
          source="springRainChance"
        />
        <NumberInput
          step={1}
          label="spring_snow_chance"
          source="springSnowChance"
        />
        <NumberInput
          step={1}
          label="spring_storm_chance"
          source="springStormChance"
        />
        <NumberInput
          step={1}
          label="summer_rain_chance"
          source="summerRainChance"
        />
        <NumberInput
          step={1}
          label="summer_snow_chance"
          source="summerSnowChance"
        />
        <NumberInput
          step={1}
          label="summer_storm_chance"
          source="summerStormChance"
        />
        <NumberInput
          step={1}
          label="winter_rain_chance"
          source="winterRainChance"
        />
        <NumberInput
          step={1}
          label="winter_snow_chance"
          source="winterSnowChance"
        />
        <NumberInput
          step={1}
          label="winter_storm_chance"
          source="winterStormChance"
        />
        <NumberInput step={1} label="zone" source="zone" />
      </SimpleForm>
    </Create>
  );
};
