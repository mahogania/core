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
import { POOL_TITLE_FIELD } from "../pool/PoolTitle";
import { QUESTPOOLMEMBER_TITLE_FIELD } from "../questPoolMember/QuestPoolMemberTitle";

export const QuestPoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestPools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Pool" source="pool.id" reference="Pool">
          <TextField source={POOL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Pool Members"
          source="questpoolmember.id"
          reference="QuestPoolMember"
        >
          <TextField source={QUESTPOOLMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
