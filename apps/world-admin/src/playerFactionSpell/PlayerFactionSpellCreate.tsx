import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FactionTitle } from "../faction/FactionTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const PlayerFactionSpellCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="faction.id" reference="Faction" label="Faction">
          <SelectInput optionText={FactionTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
