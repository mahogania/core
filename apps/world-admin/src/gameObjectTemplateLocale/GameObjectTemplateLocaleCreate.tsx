import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameObjectTemplateTitle } from "../gameObjectTemplate/GameObjectTemplateTitle";

export const GameObjectTemplateLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="gameObjectTemplate.id"
          reference="GameObjectTemplate"
          label="GameObjectTemplate"
        >
          <SelectInput optionText={GameObjectTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
