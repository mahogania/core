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

import { BusinessTitle } from "../business/BusinessTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ProposalTitle } from "../proposal/ProposalTitle";

export const OpportunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="competitor" reference="Business">
          <SelectArrayInput
            optionText={BusinessTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="proposals" reference="Proposal">
          <SelectArrayInput
            optionText={ProposalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
