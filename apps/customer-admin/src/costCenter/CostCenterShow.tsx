import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const CostCenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <TextField label="cost_center_name" source="costCenterName" />
        <TextField label="cost_center_number" source="costCenterNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <BooleanField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="is_group" source="isGroup" />
        <TextField label="lft" source="lft" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="old_parent" source="oldParent" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_cost_center" source="parentCostCenter" />
        <TextField label="rgt" source="rgt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
