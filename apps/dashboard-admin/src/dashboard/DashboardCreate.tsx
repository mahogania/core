import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chart_options" multiline source="chartOptions" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="dashboard_name" source="dashboardName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_default" source="isDefault" />
        <NumberInput step={1} label="is_standard" source="isStandard" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="module" source="moduleField" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Create>
  );
};
