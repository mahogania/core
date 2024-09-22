import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AreaTriggerTemplateActionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ActionParam" source="actionParam" />
        <TextField label="ActionType" source="actionType" />
        <TextField label="AreaTriggerId" source="areaTriggerId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsCustom" source="isCustom" />
        <TextField label="TargetType" source="targetType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
