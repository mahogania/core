import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BisectNodesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BisectNodesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="balance_sheet_summary" source="balanceSheetSummary" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="difference" source="difference" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="generated" source="generated" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="left_child" source="leftChild" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="period_from_date" source="periodFromDate" />
        <TextField label="period_to_date" source="periodToDate" />
        <TextField label="profit_loss_summary" source="profitLossSummary" />
        <TextField label="right_child" source="rightChild" />
        <TextField label="root" source="root" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
