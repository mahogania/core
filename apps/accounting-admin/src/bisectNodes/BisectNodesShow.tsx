import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BisectNodesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
