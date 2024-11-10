import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestRequestItemTitle } from "../questRequestItem/QuestRequestItemTitle";

export const QuestRequestItemConditionalEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questRequestItem.id"
          reference="QuestRequestItem"
          label="Quest Request Item"
        >
          <SelectInput optionText={QuestRequestItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
