import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROCESSOR_TITLE_FIELD } from "../processor/ProcessorTitle";
import { TRAIT_TITLE_FIELD } from "../trait/TraitTitle";

export const CommandList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Commands"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
