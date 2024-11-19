import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";

export const ConstraintEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Depth" source="depth" />
        <ReferenceInput
          source="drivenOption.id"
          reference="Option"
          label="Driven Option"
        >
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="drivingOption.id"
          reference="Option"
          label="Driving Option"
        >
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
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
