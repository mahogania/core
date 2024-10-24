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
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";

export const ConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Configurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Process Configuration"
          source="pipeline.id"
          reference="Pipeline"
        >
          <TextField source={PIPELINE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Configuration"
          source="bundle.id"
          reference="Bundle"
        >
          <TextField source={BUNDLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
