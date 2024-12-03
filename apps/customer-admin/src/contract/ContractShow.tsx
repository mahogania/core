import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="contract_template" source="contractTemplate" />
        <TextField label="contract_terms" source="contractTerms" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="document_name" source="documentName" />
        <TextField label="document_type" source="documentType" />
        <TextField label="end_date" source="endDate" />
        <TextField label="fulfilment_deadline" source="fulfilmentDeadline" />
        <TextField label="fulfilment_status" source="fulfilmentStatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ip_address" source="ipAddress" />
        <BooleanField label="is_signed" source="isSigned" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="party_name" source="partyName" />
        <TextField label="party_type" source="partyType" />
        <TextField label="party_user" source="partyUser" />
        <BooleanField label="requires_fulfilment" source="requiresFulfilment" />
        <TextField label="signed_by_company" source="signedByCompany" />
        <TextField label="signed_on" source="signedOn" />
        <TextField label="signee" source="signee" />
        <TextField label="signee_company" source="signeeCompany" />
        <TextField label="start_date" source="startDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
