import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BusinessTitle } from "../business/BusinessTitle";
import { IndustryTitle } from "../industry/IndustryTitle";

export const RelationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ascendantBusiness.id"
          reference="Business"
          label="Ascendant Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="descendantBusiness.id"
          reference="Business"
          label="Descendant Business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="industry.id"
          reference="Industry"
          label="Industry"
        >
          <SelectInput optionText={IndustryTitle} />
        </ReferenceInput>
        <SelectInput
          source="kind"
          label="Kind"
          choices={[
            { label: "Cooperation", value: "Cooperation" },
            { label: "Competition", value: "Competition" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
