import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameEventCharacterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Npc Id" source="npcId" />
      </SimpleForm>
    </Create>
  );
};
