import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StockEntryDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StockEntryDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actual_qty" source="actualQty" />
        <TextField label="additional_cost" source="additionalCost" />
        <TextField label="against_stock_entry" source="againstStockEntry" />
        <BooleanField
          label="allow_alternative_item"
          source="allowAlternativeItem"
        />
        <BooleanField
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <TextField label="amount" source="amount" />
        <TextField label="barcode" source="barcode" />
        <TextField label="basic_amount" source="basicAmount" />
        <TextField label="basic_rate" source="basicRate" />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="bom_no" source="bomNo" />
        <TextField label="conversion_factor" source="conversionFactor" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expense_account" source="expenseAccount" />
        <BooleanField label="has_item_scanned" source="hasItemScanned" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <BooleanField label="is_finished_item" source="isFinishedItem" />
        <BooleanField label="is_scrap_item" source="isScrapItem" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="job_card_item" source="jobCardItem" />
        <TextField label="material_request" source="materialRequest" />
        <TextField label="material_request_item" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="original_item" source="originalItem" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="po_detail" source="poDetail" />
        <TextField label="project" source="project" />
        <TextField label="putaway_rule" source="putawayRule" />
        <TextField label="qty" source="qty" />
        <TextField label="quality_inspection" source="qualityInspection" />
        <TextField
          label="reference_purchase_receipt"
          source="referencePurchaseReceipt"
        />
        <BooleanField label="retain_sample" source="retainSample" />
        <TextField label="s_warehouse" source="sWarehouse" />
        <TextField label="sample_quantity" source="sampleQuantity" />
        <TextField label="sco_rm_detail" source="scoRmDetail" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <BooleanField
          label="set_basic_rate_manually"
          source="setBasicRateManually"
        />
        <TextField label="ste_detail" source="steDetail" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="subcontracted_item" source="subcontractedItem" />
        <TextField label="t_warehouse" source="tWarehouse" />
        <TextField label="transfer_qty" source="transferQty" />
        <TextField label="transferred_qty" source="transferredQty" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextField label="valuation_rate" source="valuationRate" />{" "}
      </Datagrid>
    </List>
  );
};
