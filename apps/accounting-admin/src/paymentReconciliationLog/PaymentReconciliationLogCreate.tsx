import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PaymentReconciliationLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="allocated" source="allocated" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="errorLog" multiline source="errorLog" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="processPr" source="processPr" />
        <NumberInput step={1} label="reconciled" source="reconciled" />
        <NumberInput
          step={1}
          label="reconciledEntries"
          source="reconciledEntries"
        />
        <TextInput label="status" source="status" />
        <NumberInput
          step={1}
          label="totalAllocations"
          source="totalAllocations"
        />
      </SimpleForm>
    </Create>
  );
};
