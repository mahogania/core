import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FRAGMENT_TITLE_FIELD } from "../fragment/FragmentTitle";
import { PROCESSOR_TITLE_FIELD } from "../processor/ProcessorTitle";

export const ViewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Fragment"
          source="fragment.id"
          reference="Fragment"
        >
          <TextField source={FRAGMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Processor"
          source="processor.id"
          reference="Processor"
        >
          <TextField source={PROCESSOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};