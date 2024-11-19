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
import { PROPOSAL_TITLE_FIELD } from "../proposal/ProposalTitle";

export const QuoteList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Quotes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Proposal"
          source="proposal.id"
          reference="Proposal"
        >
          <TextField source={PROPOSAL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
