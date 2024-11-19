import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StockReconciliationItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="amount_difference" source="amountDifference" />
        <TextInput label="barcode" source="barcode" />
        <TextInput label="batch_no" source="batchNo" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="current_amount" source="currentAmount" />
        <NumberInput label="current_qty" source="currentQty" />
        <TextInput
          label="current_serial_and_batch_bundle"
          source="currentSerialAndBatchBundle"
        />
        <TextInput
          label="current_serial_no"
          multiline
          source="currentSerialNo"
        />
        <NumberInput
          label="current_valuation_rate"
          source="currentValuationRate"
        />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="has_item_scanned" source="hasItemScanned" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="quantity_difference" source="quantityDifference" />
        <BooleanInput
          label="reconcile_all_serial_batch"
          source="reconcileAllSerialBatch"
        />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <BooleanInput
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <NumberInput label="valuation_rate" source="valuationRate" />
        <TextInput label="warehouse" source="warehouse" />
      </SimpleForm>
    </Create>
  );
};
