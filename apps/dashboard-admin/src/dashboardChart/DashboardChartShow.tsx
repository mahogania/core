import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DashboardChartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="aggregate_function_based_on"
          source="aggregateFunctionBasedOn"
        />
        <TextField label="based_on" source="basedOn" />
        <TextField label="chart_name" source="chartName" />
        <TextField label="chart_type" source="chartType" />
        <TextField label="color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="custom_options" source="customOptions" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="document_type" source="documentType" />
        <TextField label="dynamic_filters_json" source="dynamicFiltersJson" />
        <TextField label="filters_json" source="filtersJson" />
        <TextField label="from_date" source="fromDate" />
        <TextField label="group_by_based_on" source="groupByBasedOn" />
        <TextField label="group_by_type" source="groupByType" />
        <TextField label="heatmap_year" source="heatmapYear" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="is_public" source="isPublic" />
        <TextField label="is_standard" source="isStandard" />
        <TextField label="last_synced_on" source="lastSyncedOn" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="module" source="moduleField" />
        <TextField label="number_of_groups" source="numberOfGroups" />
        <TextField label="owner" source="owner" />
        <TextField label="parent_document_type" source="parentDocumentType" />
        <TextField label="report_name" source="reportName" />
        <TextField label="source" source="source" />
        <TextField label="time_interval" source="timeInterval" />
        <TextField label="timeseries" source="timeseries" />
        <TextField label="timespan" source="timespan" />
        <TextField label="to_date" source="toDate" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="use_report_chart" source="useReportChart" />
        <TextField label="value_based_on" source="valueBasedOn" />
        <TextField label="x_field" source="xField" />
      </SimpleShowLayout>
    </Show>
  );
};
