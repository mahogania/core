import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventModelEquipEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="equipment_id" source="equipmentId" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput step={1} label="modelid" source="modelid" />
      </SimpleForm>
    </Edit>
  );
};
