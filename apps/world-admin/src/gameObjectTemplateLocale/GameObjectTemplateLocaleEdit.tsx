import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameObjectTemplateTitle } from "../gameObjectTemplate/GameObjectTemplateTitle";

export const GameObjectTemplateLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="gameObjectTemplate.id"
          reference="GameObjectTemplate"
          label="GameObjectTemplate"
        >
          <SelectInput optionText={GameObjectTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
