import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreatureFormationsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="angle" source="angle" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dist" source="dist" />
        <TextField label="groupAI" source="groupAi" />
        <TextField label="ID" source="id" />
        <TextField label="leaderGUID" source="leaderGuid" />
        <TextField label="memberGUID" source="memberGuid" />
        <TextField label="point_1" source="point_1" />
        <TextField label="point_2" source="point_2" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
