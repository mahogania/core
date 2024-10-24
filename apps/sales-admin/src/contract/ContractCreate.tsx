import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DealTitle } from "../deal/DealTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="deal.id" reference="Deal" label="Deal">
          <SelectInput optionText={DealTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
