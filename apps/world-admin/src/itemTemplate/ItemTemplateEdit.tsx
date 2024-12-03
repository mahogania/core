import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItemBehaviourTitle } from "../itemBehaviour/ItemBehaviourTitle";
import { ItemRandomBonusListTemplateTitle } from "../itemRandomBonusListTemplate/ItemRandomBonusListTemplateTitle";
import { ItemTemplateAddonTitle } from "../itemTemplateAddon/ItemTemplateAddonTitle";

export const ItemTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
