import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AreaTriggerInvolvedRelationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quest" source="quest" />
      </SimpleForm>
    </Edit>
  );
};
