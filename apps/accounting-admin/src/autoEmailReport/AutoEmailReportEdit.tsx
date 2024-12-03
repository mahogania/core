import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const AutoEmailReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <NumberInput
          step={1}
          label="data_modified_till"
          source="dataModifiedTill"
        />
        <TextInput label="day_of_week" source="dayOfWeek" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="dynamic_date_period" source="dynamicDatePeriod" />
        <TextInput label="email_to" multiline source="emailTo" />
        <NumberInput step={1} label="enabled" source="enabled" />
        <TextInput label="filter_meta" multiline source="filterMeta" />
        <TextInput label="filters" multiline source="filters" />
        <TextInput label="format" source="format" />
        <TextInput label="frequency" source="frequency" />
        <TextInput label="from_date_field" source="fromDateField" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="no_of_rows" source="noOfRows" />
        <TextInput label="owner" source="owner" />
        <TextInput label="reference_report" source="referenceReport" />
        <TextInput label="report" source="report" />
        <TextInput label="report_type" source="reportType" />
        <NumberInput step={1} label="send_if_data" source="sendIfData" />
        <TextInput label="sender" source="sender" />
        <TextInput label="to_date_field" source="toDateField" />
        <NumberInput
          step={1}
          label="use_first_day_of_period"
          source="useFirstDayOfPeriod"
        />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
