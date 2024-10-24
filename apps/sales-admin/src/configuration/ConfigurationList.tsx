import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { CATALOG_TITLE_FIELD } from "../catalog/CatalogTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";

export const ConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Configurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Bundle" source="bundle.id" reference="Bundle">
          <TextField source={BUNDLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Catalog" source="catalog.id" reference="Catalog">
          <TextField source={CATALOG_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Pipeline"
          source="pipeline.id"
          reference="Pipeline"
        >
          <TextField source={PIPELINE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
