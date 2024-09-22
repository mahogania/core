import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AccessRequirementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <NumberInput
          step={1}
          label="Completed achievement"
          source="completedAchievement"
        />
        <NumberInput step={1} label="Difficulty" source="difficulty" />
        <TextInput label="Failure Text" multiline source="failureText" />
        <NumberInput step={1} label="Item" source="item" />
        <NumberInput step={1} label="Level Max" source="levelMax" />
        <NumberInput step={1} label="Level Min" source="levelMin" />
        <NumberInput step={1} label="Map" source="mapId" />
        <NumberInput step={1} label="Quest Done" source="questDone" />
      </SimpleForm>
    </Create>
  );
};
