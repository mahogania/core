import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const JobCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actual_end_date" source="actualEndDate" />
        <TextField label="actual_start_date" source="actualStartDate" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="barcode" source="barcode" />
        <TextField label="batch_no" source="batchNo" />
        <TextField label="bom_no" source="bomNo" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="current_time" source="currentTime" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expected_end_date" source="expectedEndDate" />
        <TextField label="expected_start_date" source="expectedStartDate" />
        <TextField label="for_job_card" source="forJobCard" />
        <TextField label="for_operation" source="forOperation" />
        <TextField label="for_quantity" source="forQuantity" />
        <TextField label="hour_rate" source="hourRate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField
          label="is_corrective_job_card"
          source="isCorrectiveJobCard"
        />
        <TextField label="item_name" source="itemName" />
        <TextField label="job_started" source="jobStarted" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="operation" source="operation" />
        <TextField label="operation_id" source="operationId" />
        <TextField label="operation_row_number" source="operationRowNumber" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="process_loss_qty" source="processLossQty" />
        <TextField label="production_item" source="productionItem" />
        <TextField label="project" source="project" />
        <TextField label="quality_inspection" source="qualityInspection" />
        <TextField
          label="quality_inspection_template"
          source="qualityInspectionTemplate"
        />
        <TextField label="remarks" source="remarks" />
        <TextField label="requested_qty" source="requestedQty" />
        <TextField label="sequence_id" source="sequenceId" />
        <TextField
          label="serial_and_batch_bundle"
          source="serialAndBatchBundle"
        />
        <TextField label="serial_no" source="serialNo" />
        <TextField label="started_time" source="startedTime" />
        <TextField label="status" source="status" />
        <TextField label="time_required" source="timeRequired" />
        <TextField label="total_completed_qty" source="totalCompletedQty" />
        <TextField label="total_time_in_mins" source="totalTimeInMins" />
        <TextField label="transferred_qty" source="transferredQty" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wip_warehouse" source="wipWarehouse" />
        <TextField label="work_order" source="workOrder" />
        <TextField label="workstation" source="workstation" />
        <TextField label="workstation_type" source="workstationType" />
      </SimpleShowLayout>
    </Show>
  );
};
