import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ACHIEVEMENT_TITLE_FIELD } from "../achievement/AchievementTitle";

export const AchievementBehaviourShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Achievement"
          source="achievement.id"
          reference="Achievement"
        >
          <TextField source={ACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Behaviour Name" source="behaviourName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
