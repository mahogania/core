import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const StockEntryDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_qty" source="actualQty" />
        <NumberInput label="additional_cost" source="additionalCost" />
        <TextInput label="against_stock_entry" source="againstStockEntry" />
        <BooleanInput
          label="allow_alternative_item"
          source="allowAlternativeItem"
        />
        <BooleanInput
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <NumberInput label="amount" source="amount" />
        <TextInput label="barcode" source="barcode" />
        <NumberInput label="basic_amount" source="basicAmount" />
        <NumberInput label="basic_rate" source="basicRate" />
        <TextInput label="batch_no" source="batchNo" />
        <TextInput label="bom_no" source="bomNo" />
        <NumberInput label="conversion_factor" source="conversionFactor" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="expense_account" source="expenseAccount" />
        <BooleanInput label="has_item_scanned" source="hasItemScanned" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <BooleanInput label="is_finished_item" source="isFinishedItem" />
        <BooleanInput label="is_scrap_item" source="isScrapItem" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <TextInput label="job_card_item" source="jobCardItem" />
        <TextInput label="material_request" source="materialRequest" />
        <TextInput label="material_request_item" source="materialRequestItem" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="original_item" source="originalItem" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="po_detail" source="poDetail" />
        <TextInput label="project" source="project" />
        <TextInput label="putaway_rule" source="putawayRule" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="quality_inspection" source="qualityInspection" />
        <TextInput
          label="reference_purchase_receipt"
          source="referencePurchaseReceipt"
        />
        <BooleanInput label="retain_sample" source="retainSample" />
        <TextInput label="s_warehouse" source="sWarehouse" />
        <NumberInput step={1} label="sample_quantity" source="sampleQuantity" />
        <TextInput label="sco_rm_detail" source="scoRmDetail" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <BooleanInput
          label="set_basic_rate_manually"
          source="setBasicRateManually"
        />
        <TextInput label="ste_detail" source="steDetail" />
        <TextInput label="stock_uom" source="stockUom" />
        <TextInput label="subcontracted_item" source="subcontractedItem" />
        <TextInput label="t_warehouse" source="tWarehouse" />
        <NumberInput label="transfer_qty" source="transferQty" />
        <NumberInput label="transferred_qty" source="transferredQty" />
        <TextInput label="uom" source="uom" />
        <BooleanInput
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <NumberInput label="valuation_rate" source="valuationRate" />
      </SimpleForm>
    </Edit>
  );
};
