import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const JobCardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="actual_end_date" source="actualEndDate" />
        <DateTimeInput label="actual_start_date" source="actualStartDate" />
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="barcode" multiline source="barcode" />
        <TextInput label="batch_no" source="batchNo" />
        <TextInput label="bom_no" source="bomNo" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="current_time" source="currentTime" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="expected_end_date" source="expectedEndDate" />
        <DateTimeInput label="expected_start_date" source="expectedStartDate" />
        <TextInput label="for_job_card" source="forJobCard" />
        <TextInput label="for_operation" source="forOperation" />
        <NumberInput label="for_quantity" source="forQuantity" />
        <NumberInput label="hour_rate" source="hourRate" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="is_corrective_job_card"
          source="isCorrectiveJobCard"
        />
        <TextInput label="item_name" source="itemName" />
        <NumberInput step={1} label="job_started" source="jobStarted" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="operation" source="operation" />
        <TextInput label="operation_id" source="operationId" />
        <TextInput label="operation_row_number" source="operationRowNumber" />
        <TextInput label="owner" source="owner" />
        <DateTimeInput label="posting_date" source="postingDate" />
        <NumberInput label="process_loss_qty" source="processLossQty" />
        <TextInput label="production_item" source="productionItem" />
        <TextInput label="project" source="project" />
        <TextInput label="quality_inspection" source="qualityInspection" />
        <TextInput
          label="quality_inspection_template"
          source="qualityInspectionTemplate"
        />
        <TextInput label="remarks" multiline source="remarks" />
        <NumberInput label="requested_qty" source="requestedQty" />
        <NumberInput step={1} label="sequence_id" source="sequenceId" />
        <TextInput
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextInput label="serial_no" multiline source="serialNo" />
        <DateTimeInput label="started_time" source="startedTime" />
        <TextInput label="status" source="status" />
        <NumberInput label="time_required" source="timeRequired" />
        <NumberInput label="total_completed_qty" source="totalCompletedQty" />
        <NumberInput label="total_time_in_mins" source="totalTimeInMins" />
        <NumberInput label="transferred_qty" source="transferredQty" />
        <TextInput label="wip_warehouse" source="wipWarehouse" />
        <TextInput label="work_order" source="workOrder" />
        <TextInput label="workstation" source="workstation" />
        <TextInput label="workstation_type" source="workstationType" />
      </SimpleForm>
    </Edit>
  );
};
