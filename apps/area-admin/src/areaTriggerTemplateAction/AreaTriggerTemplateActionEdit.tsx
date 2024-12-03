import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const AreaTriggerTemplateActionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ActionParam" source="actionParam" />
        <NumberInput step={1} label="ActionType" source="actionType" />
        <NumberInput step={1} label="AreaTriggerId" source="areaTriggerId" />
        <BooleanInput label="IsCustom" source="isCustom" />
        <NumberInput step={1} label="TargetType" source="targetType" />
      </SimpleForm>
    </Edit>
  );
};
