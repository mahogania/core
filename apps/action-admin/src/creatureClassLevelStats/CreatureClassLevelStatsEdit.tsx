import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CreatureClassLevelStatsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="attackpower" source="attackpower" />
        <NumberInput step={1} label="basemana" source="basemana" />
        <NumberInput step={1} label="class" source="classField" />
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="level" source="level" />
        <NumberInput
          step={1}
          label="rangedattackpower"
          source="rangedattackpower"
        />
      </SimpleForm>
    </Edit>
  );
};
