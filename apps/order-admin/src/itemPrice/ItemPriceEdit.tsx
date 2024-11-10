import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ItemPriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batchNo" source="batchNo" />
        <TextInput label="brand" source="brand" />
        <BooleanInput label="buying" source="buying" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="itemCode" source="itemCode" />
        <TextInput label="itemDescription" multiline source="itemDescription" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="leadTimeDays" source="leadTimeDays" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="note" multiline source="note" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="packingUnit" source="packingUnit" />
        <TextInput label="priceList" source="priceList" />
        <NumberInput label="priceListRate" source="priceListRate" />
        <TextInput label="reference" source="reference" />
        <BooleanInput label="selling" source="selling" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="uom" source="uom" />
        <DateTimeInput label="validFrom" source="validFrom" />
        <DateTimeInput label="validUpto" source="validUpto" />
      </SimpleForm>
    </Edit>
  );
};
