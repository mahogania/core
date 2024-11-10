import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ConstraintEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
