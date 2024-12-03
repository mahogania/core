import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GameEventTitle } from "../gameEvent/GameEventTitle";

export const GameEventGameObjectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <ReferenceArrayInput source="gameEvents" reference="GameEvent">
          <SelectArrayInput
            optionText={GameEventTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="guid" source="guid" />
      </SimpleForm>
    </Create>
  );
};
