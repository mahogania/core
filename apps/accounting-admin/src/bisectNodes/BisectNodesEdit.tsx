import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BisectNodesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="balance_sheet_summary"
          source="balanceSheetSummary"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="difference" source="difference" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="generated" source="generated" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="left_child" source="leftChild" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <NumberInput step={1} label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="period_from_date" source="periodFromDate" />
        <DateTimeInput label="period_to_date" source="periodToDate" />
        <NumberInput label="profit_loss_summary" source="profitLossSummary" />
        <TextInput label="right_child" source="rightChild" />
        <TextInput label="root" source="root" />
      </SimpleForm>
    </Edit>
  );
};
