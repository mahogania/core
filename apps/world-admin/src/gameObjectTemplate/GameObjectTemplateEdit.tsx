import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { GameObjectTemplateAddonTitle } from "../gameObjectTemplateAddon/GameObjectTemplateAddonTitle";
import { GameObjectTemplateLocaleTitle } from "../gameObjectTemplateLocale/GameObjectTemplateLocaleTitle";
import { GameObjectTitle } from "../gameObject/GameObjectTitle";

export const GameObjectTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="gameObjectTemplateAddons"
          reference="GameObjectTemplateAddon"
        >
          <SelectArrayInput
            optionText={GameObjectTemplateAddonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="gameObjectTemplateLocales"
          reference="GameObjectTemplateLocale"
        >
          <SelectArrayInput
            optionText={GameObjectTemplateLocaleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="gameObjects" reference="GameObject">
          <SelectArrayInput
            optionText={GameObjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
