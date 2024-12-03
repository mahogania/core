import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CreatureQuestEnderEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quest" source="quest" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
