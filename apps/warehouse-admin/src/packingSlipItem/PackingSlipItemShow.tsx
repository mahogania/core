import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PackingSlipItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="batch_no" source="batchNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="dn_detail" source="dnDetail" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="net_weight" source="netWeight" />
        <TextField label="owner" source="owner" />
        <TextField label="page_break" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="pi_detail" source="piDetail" />
        <TextField label="qty" source="qty" />
        <TextField label="stock_uom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight_uom" source="weightUom" />
      </SimpleShowLayout>
    </Show>
  );
};
