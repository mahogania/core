import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ShipmentDeliveryNoteEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="delivery_note" source="deliveryNote" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="grand_total" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
      </SimpleForm>
    </Edit>
  );
};
