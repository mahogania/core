import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CreatureFormationsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="angle" source="angle" />
        <NumberInput label="dist" source="dist" />
        <NumberInput step={1} label="groupAI" source="groupAi" />
        <NumberInput label="leaderGUID" source="leaderGuid" />
        <NumberInput label="memberGUID" source="memberGuid" />
        <NumberInput step={1} label="point_1" source="point_1" />
        <NumberInput step={1} label="point_2" source="point_2" />
      </SimpleForm>
    </Create>
  );
};
