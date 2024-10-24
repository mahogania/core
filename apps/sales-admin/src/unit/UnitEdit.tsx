import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { BusinessTitle } from "../business/BusinessTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="competitor.id"
          reference="Business"
          label="Competitor"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
