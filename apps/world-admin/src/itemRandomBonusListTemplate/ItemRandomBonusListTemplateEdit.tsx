import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ItemTemplateTitle } from "../itemTemplate/ItemTemplateTitle";

export const ItemRandomBonusListTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="itemTemplate.id"
          reference="ItemTemplate"
          label="Item Template"
        >
          <SelectInput optionText={ItemTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
