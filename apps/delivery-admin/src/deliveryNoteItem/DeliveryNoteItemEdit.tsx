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

export const DeliveryNoteItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="actual_batch_qty" source="actualBatchQty" />
        <NumberInput label="actual_qty" source="actualQty" />
        <TextInput label="against_sales_invoice" source="againstSalesInvoice" />
        <TextInput label="against_sales_order" source="againstSalesOrder" />
        <BooleanInput
          label="allow_zero_valuation_rate"
          source="allowZeroValuationRate"
        />
        <NumberInput label="amount" source="amount" />
        <TextInput label="barcode" source="barcode" />
        <NumberInput label="base_amount" source="baseAmount" />
        <NumberInput label="base_net_amount" source="baseNetAmount" />
        <NumberInput label="base_net_rate" source="baseNetRate" />
        <NumberInput label="base_price_list_rate" source="basePriceListRate" />
        <NumberInput label="base_rate" source="baseRate" />
        <NumberInput
          label="base_rate_with_margin"
          source="baseRateWithMargin"
        />
        <TextInput label="batch_no" source="batchNo" />
        <NumberInput label="billed_amt" source="billedAmt" />
        <TextInput label="brand" source="brand" />
        <NumberInput label="conversion_factor" source="conversionFactor" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer_item_code" source="customerItemCode" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discount_amount" source="discountAmount" />
        <NumberInput label="discount_percentage" source="discountPercentage" />
        <TextInput label="dn_detail" source="dnDetail" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="expense_account" source="expenseAccount" />
        <BooleanInput label="grant_commission" source="grantCommission" />
        <BooleanInput label="has_item_scanned" source="hasItemScanned" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <NumberInput label="incoming_rate" source="incomingRate" />
        <NumberInput label="installed_qty" source="installedQty" />
        <BooleanInput label="is_free_item" source="isFreeItem" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_group" source="itemGroup" />
        <TextInput label="item_name" source="itemName" />
        <TextInput label="item_tax_rate" multiline source="itemTaxRate" />
        <TextInput label="item_tax_template" source="itemTaxTemplate" />
        <NumberInput
          label="margin_rate_or_amount"
          source="marginRateOrAmount"
        />
        <TextInput label="margin_type" source="marginType" />
        <TextInput label="material_request" source="materialRequest" />
        <TextInput label="material_request_item" source="materialRequestItem" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="net_amount" source="netAmount" />
        <NumberInput label="net_rate" source="netRate" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="packed_qty" source="packedQty" />
        <BooleanInput label="page_break" source="pageBreak" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="pick_list_item" source="pickListItem" />
        <NumberInput label="price_list_rate" source="priceListRate" />
        <TextInput label="pricing_rules" multiline source="pricingRules" />
        <TextInput label="project" source="project" />
        <TextInput label="purchase_order" source="purchaseOrder" />
        <TextInput label="purchase_order_item" source="purchaseOrderItem" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="quality_inspection" source="qualityInspection" />
        <NumberInput label="rate" source="rate" />
        <NumberInput label="rate_with_margin" source="rateWithMargin" />
        <NumberInput label="received_qty" source="receivedQty" />
        <NumberInput label="returned_qty" source="returnedQty" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <TextInput label="si_detail" source="siDetail" />
        <TextInput label="so_detail" source="soDetail" />
        <NumberInput label="stock_qty" source="stockQty" />
        <TextInput label="stock_uom" source="stockUom" />
        <NumberInput label="stock_uom_rate" source="stockUomRate" />
        <TextInput label="target_warehouse" source="targetWarehouse" />
        <NumberInput label="total_weight" source="totalWeight" />
        <TextInput label="uom" source="uom" />
        <BooleanInput
          label="use_serial_batch_fields"
          source="useSerialBatchFields"
        />
        <TextInput label="warehouse" source="warehouse" />
        <NumberInput label="weight_per_unit" source="weightPerUnit" />
        <TextInput label="weight_uom" source="weightUom" />
      </SimpleForm>
    </Edit>
  );
};
