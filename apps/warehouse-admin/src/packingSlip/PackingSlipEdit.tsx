import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PackingSlipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="delivery_note" source="deliveryNote" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="from_case_no" source="fromCaseNo" />
        <NumberInput label="gross_weight_pkg" source="grossWeightPkg" />
        <TextInput label="gross_weight_uom" source="grossWeightUom" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="letter_head" source="letterHead" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <NumberInput label="net_weight_pkg" source="netWeightPkg" />
        <TextInput label="net_weight_uom" source="netWeightUom" />
        <TextInput label="owner" source="owner" />
        <NumberInput step={1} label="to_case_no" source="toCaseNo" />
      </SimpleForm>
    </Edit>
  );
};
