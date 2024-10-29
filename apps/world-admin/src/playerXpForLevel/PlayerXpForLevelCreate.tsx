import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlayerTitle } from "../player/PlayerTitle";

export const PlayerXpForLevelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="player.id" reference="Player" label="Players">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
