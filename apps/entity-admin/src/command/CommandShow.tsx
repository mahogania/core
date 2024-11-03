import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROCESSOR_TITLE_FIELD } from "../processor/ProcessorTitle";
import { TRAIT_TITLE_FIELD } from "../trait/TraitTitle";

export const CommandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Processor"
          source="processor.id"
          reference="Processor"
        >
          <TextField source={PROCESSOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Trait" source="trait.id" reference="Trait">
          <TextField source={TRAIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
