import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FactionTitle } from "../faction/FactionTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const PlayerFactionAchievementEdit = (
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
      </SimpleForm>
    </Edit>
  );
};
