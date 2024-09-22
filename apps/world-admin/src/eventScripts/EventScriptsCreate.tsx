import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EventScriptsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="command" source="command" />
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="dataint" source="dataint" />
        <NumberInput step={1} label="datalong" source="datalong" />
        <NumberInput step={1} label="datalong2" source="datalong2" />
        <NumberInput step={1} label="delay" source="delay" />
        <NumberInput label="o" source="o" />
        <NumberInput label="x" source="x" />
        <NumberInput label="y" source="y" />
        <NumberInput label="z" source="z" />
      </SimpleForm>
    </Create>
  );
};
