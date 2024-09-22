import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccessRequirementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comment" source="comment" />
        <TextField
          label="Completed achievement"
          source="completedAchievement"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Difficulty" source="difficulty" />
        <TextField label="Failure Text" source="failureText" />
        <TextField label="ID" source="id" />
        <TextField label="Item" source="item" />
        <TextField label="Level Max" source="levelMax" />
        <TextField label="Level Min" source="levelMin" />
        <TextField label="Map" source="mapId" />
        <TextField label="Quest Done" source="questDone" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
