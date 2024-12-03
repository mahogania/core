import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const LandedCostItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="applicable_charges" source="applicableCharges" />
        <TextInput label="cost_center" source="costCenter" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="is_fixed_asset" source="isFixedAsset" />
        <TextInput label="item_code" source="itemCode" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="purchase_receipt_item" source="purchaseReceiptItem" />
        <NumberInput label="qty" source="qty" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="receipt_document" source="receiptDocument" />
        <TextInput label="receipt_document_type" source="receiptDocumentType" />
      </SimpleForm>
    </Edit>
  );
};
