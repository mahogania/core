import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FRAGMENT_TITLE_FIELD } from "../fragment/FragmentTitle";
import { PROCESSOR_TITLE_FIELD } from "../processor/ProcessorTitle";

export const ViewList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Views"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
