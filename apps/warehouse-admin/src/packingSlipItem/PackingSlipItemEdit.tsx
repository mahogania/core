import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PackingSlipItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batch_no" source="batchNo" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="dn_detail" source="dnDetail" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="item_code" source="itemCode" />
        <TextInput label="item_name" source="itemName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput label="net_weight" source="netWeight" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="page_break" source="pageBreak" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="pi_detail" source="piDetail" />
        <NumberInput label="qty" source="qty" />
        <TextInput label="stock_uom" source="stockUom" />
        <TextInput label="weight_uom" source="weightUom" />
      </SimpleForm>
    </Edit>
  );
};
