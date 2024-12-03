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

export const DeliveryNoteItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DeliveryNoteItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="actual_batch_qty" source="actualBatchQty" />
        <TextField label="actual_qty" source="actualQty" />
        <TextField label="against_sales_invoice" source="againstSalesInvoice" />
        <TextField label="against_sales_order" source="againstSalesOrder" />
        <BooleanField
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <TextField label="amount" source="amount" />
        <TextField label="barcode" source="barcode" />
        <TextField label="base_amount" source="baseAmount" />
        <TextField label="base_net_amount" source="baseNetAmount" />
        <TextField label="base_net_rate" source="baseNetRate" />
        <TextField label="base_price_list_rate" source="basePriceListRate" />
        <TextField label="base_rate" source="baseRate" />
        <TextField label="base_rate_with_margin" source="baseRateWithMargin" />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="billed_amt" source="billedAmt" />
        <TextField label="brand" source="brand" />
        <TextField label="conversion_factor" source="conversionFactor" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer_item_code" source="customerItemCode" />
        <TextField label="description" source="description" />
        <TextField label="discount_amount" source="discountAmount" />
        <TextField label="discount_percentage" source="discountPercentage" />
        <TextField label="dn_detail" source="dnDetail" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expense_account" source="expenseAccount" />
        <BooleanField label="grant_commission" source="grantCommission" />
        <BooleanField label="has_item_scanned" source="hasItemScanned" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="incoming_rate" source="incomingRate" />
        <TextField label="installed_qty" source="installedQty" />
        <BooleanField label="is_free_item" source="isFreeItem" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_group" source="itemGroup" />
        <TextField label="item_name" source="itemName" />
        <TextField label="item_tax_rate" source="itemTaxRate" />
        <TextField label="item_tax_template" source="itemTaxTemplate" />
        <TextField label="margin_rate_or_amount" source="marginRateOrAmount" />
        <TextField label="margin_type" source="marginType" />
        <TextField label="material_request" source="materialRequest" />
        <TextField label="material_request_item" source="materialRequestItem" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="net_amount" source="netAmount" />
        <TextField label="net_rate" source="netRate" />
        <TextField label="owner" source="owner" />
        <TextField label="packed_qty" source="packedQty" />
        <BooleanField label="page_break" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="pick_list_item" source="pickListItem" />
        <TextField label="price_list_rate" source="priceListRate" />
        <TextField label="pricing_rules" source="pricingRules" />
        <TextField label="project" source="project" />
        <TextField label="purchase_order" source="purchaseOrder" />
        <TextField label="purchase_order_item" source="purchaseOrderItem" />
        <TextField label="qty" source="qty" />
        <TextField label="quality_inspection" source="qualityInspection" />
        <TextField label="rate" source="rate" />
        <TextField label="rate_with_margin" source="rateWithMargin" />
        <TextField label="received_qty" source="receivedQty" />
        <TextField label="returned_qty" source="returnedQty" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="si_detail" source="siDetail" />
        <TextField label="so_detail" source="soDetail" />
        <TextField label="stock_qty" source="stockQty" />
        <TextField label="stock_uom" source="stockUom" />
        <TextField label="stock_uom_rate" source="stockUomRate" />
        <TextField label="target_warehouse" source="targetWarehouse" />
        <TextField label="total_weight" source="totalWeight" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextField label="warehouse" source="warehouse" />
        <TextField label="weight_per_unit" source="weightPerUnit" />
        <TextField label="weight_uom" source="weightUom" />{" "}
      </Datagrid>
    </List>
  );
};
