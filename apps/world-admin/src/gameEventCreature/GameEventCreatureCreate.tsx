import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { GameEventTitle } from "../gameEvent/GameEventTitle";

export const GameEventCreatureCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="gameEvents" reference="GameEvent">
          <SelectArrayInput
            optionText={GameEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Spawner ID" source="spawnerId" />
      </SimpleForm>
    </Create>
  );
};
