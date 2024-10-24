import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UnitTitle } from "../unit/UnitTitle";
import { IndustryTitle } from "../industry/IndustryTitle";
import { RelationTitle } from "../relation/RelationTitle";
import { StrengthTitle } from "../strength/StrengthTitle";
import { WeaknessTitle } from "../weakness/WeaknessTitle";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="businessUnits" reference="Unit">
          <SelectArrayInput
            optionText={UnitTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="industry.id"
          reference="Industry"
          label="Industry"
        >
          <SelectInput optionText={IndustryTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="predecessorRelations" reference="Relation">
          <SelectArrayInput
            optionText={RelationTitle}
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
        <ReferenceInput
          source="succesorRelations.id"
          reference="Relation"
          label="Succesor relations"
        >
          <SelectInput optionText={RelationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="weaknesses" reference="Weakness">
          <SelectArrayInput
            optionText={WeaknessTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
