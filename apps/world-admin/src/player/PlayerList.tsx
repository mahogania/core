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
import { GENESTAT_TITLE_FIELD } from "../geneStat/GeneStatTitle";

export const PlayerList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Players"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Gene Stats"
          source="genestat.id"
          reference="GeneStat"
        >
          <TextField source={GENESTAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
