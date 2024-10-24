import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";
import { OptionTitle } from "../option/OptionTitle";

export const ConstraintEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ascendantProduct.id"
          reference="Product"
          label="Ascendant Product"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Depth" source="depth" />
        <ReferenceInput
          source="descendantProduct.id"
          reference="Product"
          label="Descendant Product"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <SelectInput
          source="kind"
          label="Kind"
          choices={[
            { label: "Allow", value: "Allow" },
            { label: "Forbid", value: "Forbid" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="option.id" reference="Option" label="Option">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
