import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POOL_TITLE_FIELD } from "../pool/PoolTitle";
import { QUESTPOOLMEMBER_TITLE_FIELD } from "./QuestPoolMemberTitle";
import { POOLMEMBER_TITLE_FIELD } from "../poolMember/PoolMemberTitle";

export const QuestPoolMemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Pool Member"
          source="poolmember.id"
          reference="PoolMember"
        >
          <TextField source={POOLMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestPool"
          target="questPoolMembersId"
          label="QuestPools"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
