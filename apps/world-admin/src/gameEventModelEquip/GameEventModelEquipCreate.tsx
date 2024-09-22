import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameEventModelEquipCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="equipment_id" source="equipmentId" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput step={1} label="modelid" source="modelid" />
      </SimpleForm>
    </Create>
  );
};
