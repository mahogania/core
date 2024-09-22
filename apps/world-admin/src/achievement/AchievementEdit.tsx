import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AchievementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
