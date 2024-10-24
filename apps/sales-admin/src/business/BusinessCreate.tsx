import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";
import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { StrengthTitle } from "../strength/StrengthTitle";
import { ThreatTitle } from "../threat/ThreatTitle";
import { WeaknessTitle } from "../weakness/WeaknessTitle";

export const BusinessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="businessUnits" reference="Unit">
          <SelectArrayInput
            optionText={UnitTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="opportunities" reference="Opportunity">
          <SelectArrayInput
            optionText={OpportunityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="strengths" reference="Strength">
          <SelectArrayInput
            optionText={StrengthTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="threats" reference="Threat">
          <SelectArrayInput
            optionText={ThreatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="weaknesses" reference="Weakness">
          <SelectArrayInput
            optionText={WeaknessTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
