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
import { POOLMEMBER_TITLE_FIELD } from "../poolMember/PoolMemberTitle";

export const QuestPoolMemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestPoolMembers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Pool Member"
          source="poolmember.id"
          reference="PoolMember"
        >
          <TextField source={POOLMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
