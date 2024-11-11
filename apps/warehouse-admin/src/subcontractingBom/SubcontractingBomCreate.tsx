import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const SubcontractingBomCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="conversion_factor" source="conversionFactor" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="finished_good" source="finishedGood" />
        <TextInput label="finished_good_bom" source="finishedGoodBom" />
        <NumberInput label="finished_good_qty" source="finishedGoodQty" />
        <TextInput label="finished_good_uom" source="finishedGoodUom" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="is_active" source="isActive" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="service_item" source="serviceItem" />
        <NumberInput label="service_item_qty" source="serviceItemQty" />
        <TextInput label="service_item_uom" source="serviceItemUom" />
      </SimpleForm>
    </Create>
  );
};
