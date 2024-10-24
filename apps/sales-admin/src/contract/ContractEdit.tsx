import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DealTitle } from "../deal/DealTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="deal.id" reference="Deal" label="Deal">
          <SelectInput optionText={DealTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
