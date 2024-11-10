import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItemBehaviourTitle } from "../itemBehaviour/ItemBehaviourTitle";
import { ItemRandomBonusListTemplateTitle } from "../itemRandomBonusListTemplate/ItemRandomBonusListTemplateTitle";
import { ItemTemplateAddonTitle } from "../itemTemplateAddon/ItemTemplateAddonTitle";

export const ItemTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="itemBehaviour.id"
          reference="ItemBehaviour"
          label="Item Behaviour"
        >
          <SelectInput optionText={ItemBehaviourTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="itemRandomBonusListTemplates"
          reference="ItemRandomBonusListTemplate"
        >
          <SelectArrayInput
            optionText={ItemRandomBonusListTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="itemTemplateAddons.id"
          reference="ItemTemplateAddon"
          label="Item Template Addons"
        >
          <SelectInput optionText={ItemTemplateAddonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
