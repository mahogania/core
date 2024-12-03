import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const StockReconciliationItemShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <TextField label="amount" source="amount" />
        <TextField label="amount_difference" source="amountDifference" />
        <TextField label="barcode" source="barcode" />
        <TextField label="batch_no" source="batchNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="current_amount" source="currentAmount" />
        <TextField label="current_qty" source="currentQty" />
        <TextField
          label="current_serial_and_batch_bundle"
          source="currentSerialAndBatchBundle"
        />
        <TextField label="current_serial_no" source="currentSerialNo" />
        <TextField
          label="current_valuation_rate"
          source="currentValuationRate"
        />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="has_item_scanned" source="hasItemScanned" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="qty" source="qty" />
        <TextField label="quantity_difference" source="quantityDifference" />
        <BooleanField
          label="reconcile_all_serial_batch"
          source="reconcileAllSerialBatch"
        />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextField label="valuation_rate" source="valuationRate" />
        <TextField label="warehouse" source="warehouse" />
      </SimpleShowLayout>
    </Show>
  );
};
