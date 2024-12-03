import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const CostCenterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <TextInput label="cost_center_name" source="costCenterName" />
        <TextInput label="cost_center_number" source="costCenterNumber" />
        <DateTimeInput label="creation" source="creation" />
        <BooleanInput label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <BooleanInput label="is_group" source="isGroup" />
        <NumberInput step={1} label="lft" source="lft" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="old_parent" source="oldParent" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_cost_center" source="parentCostCenter" />
        <NumberInput step={1} label="rgt" source="rgt" />
      </SimpleForm>
    </Create>
  );
};
