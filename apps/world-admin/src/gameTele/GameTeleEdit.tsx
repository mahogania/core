import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameTeleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="map" source="map" />
        <TextInput label="name" source="name" />
        <NumberInput label="orientation" source="orientation" />
        <NumberInput label="position_x" source="positionX" />
        <NumberInput label="position_y" source="positionY" />
        <NumberInput label="position_z" source="positionZ" />
      </SimpleForm>
    </Edit>
  );
};
