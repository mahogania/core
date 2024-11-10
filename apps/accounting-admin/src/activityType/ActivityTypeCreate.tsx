import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ActivityTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activity_type" source="activityType" />
        <NumberInput label="billing_rate" source="billingRate" />
        <NumberInput label="costing_rate" source="costingRate" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Create>
  );
};
