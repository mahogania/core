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
import { CONFIGURATION_TITLE_FIELD } from "../configuration/ConfigurationTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Items"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Configuration"
          source="configuration.id"
          reference="Configuration"
        >
          <TextField source={CONFIGURATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Quote" source="quote.id" reference="Quote">
          <TextField source={QUOTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
