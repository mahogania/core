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
import { INDUSTRY_TITLE_FIELD } from "../industry/IndustryTitle";
import { RELATION_TITLE_FIELD } from "../relation/RelationTitle";

export const BusinessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Businesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Industry"
          source="industry.id"
          reference="Industry"
        >
          <TextField source={INDUSTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Succesor relations"
          source="relation.id"
          reference="Relation"
        >
          <TextField source={RELATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
