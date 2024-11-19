import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GameEventTitle } from "../gameEvent/GameEventTitle";

export const GameEventModelEquipCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Equipment ID" source="equipmentId" />
        <ReferenceArrayInput source="gameEvents" reference="GameEvent">
          <SelectArrayInput
            optionText={GameEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Model ID" source="modelid" />
      </SimpleForm>
    </Create>
  );
};
