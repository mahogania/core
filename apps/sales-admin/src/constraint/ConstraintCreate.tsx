import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ConstraintCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Depth" source="depth" />
        <SelectInput
          source="kind"
          label="Kind"
          choices={[
            { label: "Allow", value: "Allow" },
            { label: "Forbid", value: "Forbid" },
            { label: "Force", value: "Force" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
