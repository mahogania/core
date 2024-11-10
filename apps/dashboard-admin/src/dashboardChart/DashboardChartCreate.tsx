import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DashboardChartCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="aggregate_function_based_on"
          source="aggregateFunctionBasedOn"
        />
        <TextInput label="based_on" source="basedOn" />
        <TextInput label="chart_name" source="chartName" />
        <TextInput label="chart_type" source="chartType" />
        <TextInput label="color" source="color" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="custom_options" multiline source="customOptions" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="document_type" source="documentType" />
        <TextInput
          label="dynamic_filters_json"
          multiline
          source="dynamicFiltersJson"
        />
        <TextInput label="filters_json" multiline source="filtersJson" />
        <DateTimeInput label="from_date" source="fromDate" />
        <TextInput label="group_by_based_on" source="groupByBasedOn" />
        <TextInput label="group_by_type" source="groupByType" />
        <TextInput label="heatmap_year" source="heatmapYear" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="is_public" source="isPublic" />
        <NumberInput step={1} label="is_standard" source="isStandard" />
        <DateTimeInput label="last_synced_on" source="lastSyncedOn" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="module" source="moduleField" />
        <NumberInput
          step={1}
          label="number_of_groups"
          source="numberOfGroups"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent_document_type" source="parentDocumentType" />
        <TextInput label="report_name" source="reportName" />
        <TextInput label="source" source="source" />
        <TextInput label="time_interval" source="timeInterval" />
        <NumberInput step={1} label="timeseries" source="timeseries" />
        <TextInput label="timespan" source="timespan" />
        <DateTimeInput label="to_date" source="toDate" />
        <TextInput label="type" source="typeField" />
        <NumberInput
          step={1}
          label="use_report_chart"
          source="useReportChart"
        />
        <TextInput label="value_based_on" source="valueBasedOn" />
        <TextInput label="x_field" source="xField" />
      </SimpleForm>
    </Create>
  );
};
