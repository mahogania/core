import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FactionTitle } from "../faction/FactionTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const PlayerFactionQuestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="faction.id" reference="Faction" label="Faction">
          <SelectInput optionText={FactionTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <TextInput label="Quest Id" source="questId" />
        <TextInput label="State" source="state" />
      </SimpleForm>
    </Edit>
  );
};
