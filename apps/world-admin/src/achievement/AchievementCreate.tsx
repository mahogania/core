import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AchievementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Count" source="count" />
        <NumberInput step={1} label="Flags" source="flags" />
        <NumberInput step={1} label="Map" source="map" />
        <NumberInput step={1} label="Points" source="points" />
        <NumberInput step={1} label="Ref Achievement" source="refAchievement" />
        <NumberInput
          step={1}
          label="Required Faction"
          source="requiredFaction"
        />
      </SimpleForm>
    </Create>
  );
};
