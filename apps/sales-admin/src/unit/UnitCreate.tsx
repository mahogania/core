import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { BusinessTitle } from "../business/BusinessTitle";

export const UnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
