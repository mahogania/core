import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PosClosingEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="errorMessage" source="errorMessage" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="netTotal" source="netTotal" />
        <TextField label="owner" source="owner" />
        <TextField label="periodEndDate" source="periodEndDate" />
        <TextField label="periodStartDate" source="periodStartDate" />
        <TextField label="posOpeningEntry" source="posOpeningEntry" />
        <TextField label="posProfile" source="posProfile" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="postingTime" source="postingTime" />
        <TextField label="status" source="status" />
        <TextField label="totalQuantity" source="totalQuantity" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
