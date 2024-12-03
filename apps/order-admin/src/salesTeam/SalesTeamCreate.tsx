import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesTeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="allocatedAmount" source="allocatedAmount" />
        <NumberInput label="allocatedPercentage" source="allocatedPercentage" />
        <TextInput label="commissionRate" source="commissionRate" />
        <TextInput label="contactNo" source="contactNo" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="incentives" source="incentives" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="salesPerson" source="salesPerson" />
      </SimpleForm>
    </Create>
  );
};
