import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="contracts" reference="Contract">
          <SelectArrayInput
            optionText={ContractTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="invoices" reference="Invoice">
          <SelectArrayInput
            optionText={InvoiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="Opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
