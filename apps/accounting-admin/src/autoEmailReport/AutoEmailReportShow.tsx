import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AutoEmailReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="data_modified_till" source="dataModifiedTill" />
        <TextField label="day_of_week" source="dayOfWeek" />
        <TextField label="description" source="description" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="dynamic_date_period" source="dynamicDatePeriod" />
        <TextField label="email_to" source="emailTo" />
        <TextField label="enabled" source="enabled" />
        <TextField label="filter_meta" source="filterMeta" />
        <TextField label="filters" source="filters" />
        <TextField label="format" source="format" />
        <TextField label="frequency" source="frequency" />
        <TextField label="from_date_field" source="fromDateField" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="no_of_rows" source="noOfRows" />
        <TextField label="owner" source="owner" />
        <TextField label="reference_report" source="referenceReport" />
        <TextField label="report" source="report" />
        <TextField label="report_type" source="reportType" />
        <TextField label="send_if_data" source="sendIfData" />
        <TextField label="sender" source="sender" />
        <TextField label="to_date_field" source="toDateField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="use_first_day_of_period"
          source="useFirstDayOfPeriod"
        />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
