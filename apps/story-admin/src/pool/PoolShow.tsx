import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POOL_TITLE_FIELD } from "./PoolTitle";
import { QUESTPOOLMEMBER_TITLE_FIELD } from "../questPoolMember/QuestPoolMemberTitle";

export const PoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuestPool"
          target="poolId"
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
