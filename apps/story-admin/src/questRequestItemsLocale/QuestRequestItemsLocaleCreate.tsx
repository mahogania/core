import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestRequestItemTitle } from "../questRequestItem/QuestRequestItemTitle";

export const QuestRequestItemsLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="questRequestItem.id"
          reference="QuestRequestItem"
          label="Quest Request Item"
        >
          <SelectInput optionText={QuestRequestItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
