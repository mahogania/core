import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const LandedCostItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LandedCostItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="applicable_charges" source="applicableCharges" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="is_fixed_asset" source="isFixedAsset" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="purchase_receipt_item" source="purchaseReceiptItem" />
        <TextField label="qty" source="qty" />
        <TextField label="rate" source="rate" />
        <TextField label="receipt_document" source="receiptDocument" />
        <TextField label="receipt_document_type" source="receiptDocumentType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
