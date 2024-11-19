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
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { INDUSTRY_TITLE_FIELD } from "../industry/IndustryTitle";

export const RelationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Relations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Ascendant Business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Descendant Business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Industry"
          source="industry.id"
          reference="Industry"
        >
          <TextField source={INDUSTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Kind" source="kind" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
