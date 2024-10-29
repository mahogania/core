import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ItemTemplateTitle } from "../itemTemplate/ItemTemplateTitle";

export const ItemRandomBonusListTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="itemTemplate.id"
          reference="ItemTemplate"
          label="Item Template"
        >
          <SelectInput optionText={ItemTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
